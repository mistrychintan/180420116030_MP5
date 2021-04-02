var net = require('net');

function rev(k) {
  var x=k.split("");
  x.reverse();
  var p=x.join("");
   return p;
}

var server = net.createServer(function(client) {
    console.log('Client Connected');
    client.on('end', function() {
        console.log('Client disconnected:');
    })
    client.on('data', function(data) {
        client.write(rev(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})