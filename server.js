var http = require("http"); //inckude the http module
var fs = require("fs"); //include the file system module


// server is what happens when someone loads up the page in a browser
// server is listening below for http traffic at  port XXXX

var server = http.createServer(function(req, res){
	console.log('someone conneted via http')
	fs.readFile('index.html', 'utf-8', function(error, data){
		//console.log(error);
		// console.log(data);
		if (error){
			res.writeHead(500, {'content-type' : 'text/html'});
			res.end(error);
		}
		else{
			res.writeHead(200, {'content-type' : 'text/html'});
			res.end(data);
		}
	})
});

// include the socket.io module
var socketIo = require('socket.io');
var socketUsers = [];

	userSocketStuff = {
	scoket: scoket
	}


// listen to the server which is listening on port XXXX
var io = socketIo.listen(server);
//we need to deal with a new socket connection


	io.sockets.on('connect', function(socket){
		scoketUsers.push({
		socketID: socket.id,
		name: 'unknown'
	});

	io.sockets.emit('users',{
		socketUsers : socketUsers
	});

	socketUsers.push(socket);
	console.log('someone connected via the socket')
	
	scoket.on('name_to_server', function(name){
		io.sockets.emit('users',{
			name: name.name
		})
	});

	socket.on('message_to_server', function(data){
		io.sockets.emit('message_to_client', {
			message: data.message,
			name: data.name,
			date: data.data
			});
		});
		socket.on('disconnect', function(){
			console.log('a user has disconnected');
			var user = socketUsers.indexOf(socket);
			socketUsers.splice(user,1);
		});
});

server.listen(8080);
console.log("Listening on port 8080...");

//my ip address with local host = 10.150.50.117:8080