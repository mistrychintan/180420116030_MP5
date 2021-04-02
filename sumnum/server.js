var net = require('net');

function calSum(k) {
    var sum=0;
    var t= k.split("");
    for(var i=0;i<t.length;i++){
        sum=sum+ Number(t[i]);
    }
   
   return 'Sum is '+sum;
}

var server = net.createServer(function(client) {
    console.log('Client Connected');
    client.on('end', function() {
        console.log('Client disconnected:');
    })
    client.on('data', function(data) {
        client.write(calSum(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})