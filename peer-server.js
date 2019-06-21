var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var PORT = process.env.PORT || 9000;

var server = PeerServer({
    port: PORT,
    path: '/peerjs'
});

// Event peer
server.on('connection', id => {
  console.log('connected on peer id:', id);
});

server.on('disconnect', async id => {
  console.log('disconnect peer id: ', id);
});
