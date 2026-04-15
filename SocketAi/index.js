const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('hi');
        socket.emit('hello', 'world');

        // join the room named 'some room'
        socket.join('some room');

        // broadcast to all connected clients in the room
        io.to('some room').emit('hello', 'world');

        // broadcast to all connected clients except those in the room
        io.except('some room').emit('hello', 'world');

        // leave the room
        socket.leave('some room');
    });
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});