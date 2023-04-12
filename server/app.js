require('dotenv').config();
require('express-async-errors');
const connectToDb = require('./config/db');
const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./middleware/error-handler')

app.use(express.json());
app.use(cors())

// testing router
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