const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'emmanuel@example.com',
    text: 'Hey there!',
    createdAt: 232
  });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });

  socket.on('createEmail', function(newEmail){
    console.log('createEmail', newEmail);
  });

  socket.emit('newMessage', {
    from: 'emmanuelcb',
    text: 'Hey there!',
    createdAt:  Date.now()
  });

  socket.on('newCMessage', function(m){
    console.log('newCMessage', m);
  })
});

server.listen(port, ()=>{
  console.log('Server started at port', port);
});
