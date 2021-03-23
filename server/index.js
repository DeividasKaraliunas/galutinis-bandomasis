const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config({ path: 'server/.env' })
const animalRouter = require('./routes/animals')

const server = express();

server.use(cors());
server.use(express.json())
server.use(morgan('tiny'))

server.use('/animals', animalRouter);

const {
    SERVER_PORT,
    SERVER_USER,
    SERVER_PASS,
    SERVER_CLUSTER,
    SERVER_NAME,
} = process.env;

server.get('/', (req, res) => {
    res.send('Testing...')
})

mongoose.connect(`mongodb+srv://${SERVER_USER}:${SERVER_PASS}@${SERVER_CLUSTER}/${SERVER_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true })

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Server is running')
    server.listen(SERVER_PORT, () => {
        console.log(`Server is running on http://localhost:${SERVER_PORT}`)
    });
});
db.on('error', console.error.bind(console, 'connection error:'));