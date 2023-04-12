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

app.use(express.json());
app.use(cors())
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute);
app.use('/api/v1/conversation', conversationRoute);

// testing route
app.get('/test', (req, res) => {
    res.json({ message: "Hello World"})
})

app.use(errorHandler);

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