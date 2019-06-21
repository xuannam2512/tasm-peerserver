var fs = require('fs');
var PeerServer = require('peer').PeerServer;
var axios = require('axios');

var PORT = process.env.PORT || 9000;

var server = PeerServer({
    port: PORT,
    path: '/peerjs'
});

// Function clear peerID
function clearPeerId(peeerId) {
    axios({
        method:'delete',
        url: `https://tasm-authentication.herokuapp.com/api/v1/users/peer/${peeerId}`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log('Error to clear peerID: ', error);
    })
}

// Event peer
server.on('connection', id => {
  console.log('connected on peer id:', id);
});

server.on('disconnect', async id => {
  console.log('disconnect peer id: ', id);
  clearPeerId(id);
});
