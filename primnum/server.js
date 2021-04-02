var net = require('net');
const { Socket } = require('node:dgram');
var clients = 0;

function p(int) {
              
    var n, i, flag = true;
      
    // Getting the value form text
    // field using DOM
    n = document.myform.n.value;
    n = parseInt(n)
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
          
        // Check and display alert message
    if (flag == true)
        alert(n + " is prime");
    else
        alert(n + " is not prime");
}


var server = net.createServer(function(client) {

    console.log('Client Connected');


    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(p(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})