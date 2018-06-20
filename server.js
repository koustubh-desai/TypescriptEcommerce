/*
1. create a static node server
2. enable sending html file
3. Handle error when file to be fetched not found
4. Serve a json file to front-end
*/

var http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer(function(req,res){
	var url = req.url;
	var filetype = url.match(/\.(html|js|json|css|jpg|png|ico)/gi);
	filetype = filetype.length?filetype[0]:'none';
	switch(filetype){
		case '.html':
			ReadFile(res,url,'text/html');
		break;
		case '.js':
			ReadFile(res,url,'text/javascript');
		break;
		case '.json':
			ReadFile(res,url,'application/json');
		break;
		case '.css':
			ReadFile(res,url,'text/css');
		break;
		case '.png':
		case '.jpg':
			ReadFile(res,url,'image/jpeg');
		break;
		case '.ico':
			ReadFile(res,url,'image/jpeg');
		break;
	}
	
}).listen('3000');

function ReadFile(res,url,content_type){
	console.log('reading...',url);
	fs.readFile('dist'+url,function(err,data){
		if(err){
			console.log('Hey Error',err);
			res.writeHead(400);
			res.write("error");
			res.end();
			return;
		}
		res.writeHead(200,{'Content-Type':content_type});
		res.write(data);
		res.end();
	});
	
}