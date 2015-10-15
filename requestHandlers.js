var exec = require("child_process").exec;

function start(res) {
	console.log("Request handler 'start' was called");
	var content = "empty";

	exec("dir /w", function( error, stdout, stderr) {
		content = stdout;
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write(content);
		res.end();//응답 종료
	});

	
}

function upload(res) {
	console.log("Request handler 'upload' was called");
	res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write("Hello, world");
		res.end();//응답 종료
}

exports.start = start;
exports.upload = upload;