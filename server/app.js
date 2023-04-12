require('dotenv').config();
require('express-async-errors');
const connectToDb = require('./config/db');
const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./middlewares/error-handler');
const userRoute = require('./routes/userRoute');
const messageRoute = require('./routes/messageRoute');
const conversationRoute = require('./routes/userConversationRoute');
const io = require('socket.io')( 5500, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

app.use(express.json());
app.use(cors())
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute);
app.use('/api/v1/conversation', conversationRoute);
app.use(errorHandler);

// socket io
io.on('connection', (socket) => {
    console.log(`user just connected with id: ${socket.id}`);

    io.emit('hello', 'hello world')

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

const port = process.env.PORT || 6000;

const start = async() => {
    try {
        await connectToDb(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}...`);
        })
    } catch(error) {
        console.log(error);
    }
}

start()