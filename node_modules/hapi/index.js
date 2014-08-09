var Hapi = require('hapi');
var server = new Hapi.Server(8080, 'localhost');

// good examples of the various methods the Server object has.
server.start(function() {
  console.log('Hapi server started @', server.info.uri);
});