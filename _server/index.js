const { Server } = require('socket.io');
const { createServer } = require('node:http');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const server = createServer(app);

const io = new Server(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on('connection', (socket) => {
    // console.log(`A user connected`, socket);

    let arr_online = [];
    socket.adapter.rooms.forEach(element => {
        arr_online.push(element);
    });
    // console.log(arr_online.length);

    // socket.emit('SERVER-userOnline', arr_online.length);

    
    
    // socket.on('FRONTEND-userOnline', (online) => {
        //     console.log('Message from FrontEnd: ' + online);
        //     // socket.broadcast.emit("SOCKETIO-dataToServer", message_form);
        // });
        
        socket.on('FRONTEND-onSubmitChatNow', (message_form) => {
            console.log('Message from FrontEnd: ' + message_form);
            socket.broadcast.emit("SOCKETIO-dataToServer", message_form);
            socket.broadcast.emit("FRONTEND-userOnline", arr_online.length);
    });
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});
