var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var PORT = process.env.PORT || 9000;

var server = PeerServer({
    port: PORT,
    path: '/peerjs'
});
