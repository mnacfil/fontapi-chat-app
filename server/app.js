require('dotenv').config();
require('express-async-errors');
const connectToDb = require('./config/db');
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const errorHandler = require('./middlewares/error-handler');
const userRoute = require('./routes/userRoute');
const messageRoute = require('./routes/messageRoute');
const conversationRoute = require('./routes/userConversationRoute');


app.use(express.json());
app.use(cors())

const io = require('socket.io')( http, {
    cors: {
        origin:  "http://localhost:3000"
    }
})

// socket io
let users = [];

const addUser = (user) => {
    const isAlreadyConnected = users.find(currentUser => currentUser.userID === user.userID );
    if(isAlreadyConnected) return;
    users.push(user);
}
const getUser = (id) => {
    return users.find(user => user.userID === id);
}
const removeUser = (socketID) => {
    users = users.filter(user => user.socketID !== socketID)
}

io.on('connection', (socket) => {
    console.log(`user just connected with id: ${socket.id}`);

    // catch the event called "addThisUser" fire by client,
    socket.on('addThisUser', (userID) => {
        addUser({ userID, socketID: socket.id});
        io.emit('getAllUser', users);
    })

      //send and get message
        socket.on("sendMessage", (payload) => {
            console.log(payload);
            const { senderID, receiverID, message } = payload;
            const user = getUser(receiverID);
            io.to(user.socketID).emit("receiveMessage", {
                senderID,
                message,
            });
        });


    socket.on('disconnect', () => {
        console.log('User disconnected');
        removeUser(socket.id);
        io.emit('getAllUser', users)
    })
})

app.use('/api/v1/account', userRoute);
app.use('/api/v1/message', messageRoute);
app.use('/api/v1/conversation', conversationRoute);
app.use(errorHandler);

const port = process.env.PORT || 8080;

const start = async() => {
    try {
        await connectToDb(process.env.MONGO_URL);
        http.listen(port, () => {
            console.log(`Server is listening on port: ${port}...`);
        })
    } catch(error) {
        console.log(error);
    }
}

start()