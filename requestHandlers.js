var querystring = require("querystring");

function start(res, postData) {
	console.log("Request handler 'start' was called");
	var body = "<!doctype html>" + 
	"<html>" + 
	"<head>" + 
	"<meta charset=utf-8>" + 
	"</head>" +
	"<body>" +
	"<form action='/upload' method='post'>" +
	"<textarea name='text' rows='20' cols='60'></textarea>" +
	"<br><input type='submit' value='Send'>" +
	"</form>" + 
	"</body>" +
	"</html>";

	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write(body);
	res.end();
	
}

function upload(res, postData) {
	console.log("Request handler 'upload' was called");
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("Received Message : " + querystring.parse(postData).text);
	res.end();//응답 종료
}

exports.start = start;
exports.upload = upload;