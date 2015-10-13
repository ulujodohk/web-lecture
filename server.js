

var http = require("http");

function start() {
	function onRequest(req, res) {
		res.writeHead(200, {"Content=Type" : "text/plain"});
		res.write("Hello World!");
		res.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server Started on 8888 ports");
}

exports.start = start;