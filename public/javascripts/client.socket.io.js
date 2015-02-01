var server_name= "http://127.0.0.1:3000/";
var socket=io.connect(server_name);

console.log('Connecting to Server' + server_name);
socket.on('PING' , function(data){
	socket.emit('PONG', {pong: 'PONG'});
});

socket.on('PONG', function(data){
	console.log(data.pong);
});

$('#ping').click(function(){
	socket.emit('PING' , {ping: 'PING'});
});
