'use strict';
//require http module so we can send requests
var http = require('http');
//create webserver that listens on port 3000 
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello Alap');
}).listen(3000);
//end

