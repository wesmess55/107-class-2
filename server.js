var express = require('express');
var server = express();

server.get('/',function(req, res){
    res.send("hello there!");
});


server.get('/about',function(req,res){
    res.send("<h1 style='color:blue;'>Wes Ray<h1>");
});
server.listen(8080, function(){
    console.log("Server running at http://localhost:8080");
});

server.get('/soon',function(req,res){
    res.send("<h1 style= 'weight:bold;color:grey;'>Page Coming Soon<h1>");
});