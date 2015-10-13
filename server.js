

var http = require("http");

function onRequest(req, res) {
	res.writeHead(200, {"Content=Type" : "text/plain"});
	res.write("Hello World!");
	res.end();
}).listen(8888);

console.log("Server Started on 8888 ports");