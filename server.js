

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(req, res) {
		var postData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");

		req.setEncoding("utf8");
		req.addListener("data", function(postDataPiece) {
			postData += postDataPiece;
			console.log("Received Post Data Piece '" + postDataPiece + "'.");
		});

		req.addListener("end", function() {
			route(handle, pathname, res, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server Started on 8888 ports");
}

exports.start = start;