var socket = io();
socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Sample Text'
  });

  socket.emit('newCMessage', {
    to: 'emmanuel@server.com',
    message: 'Hello from client!'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email){
  console.log('New email', email);
});

socket.on('newMessage', function(message){
  console.log('GET newMessage from Serv', message);
})
