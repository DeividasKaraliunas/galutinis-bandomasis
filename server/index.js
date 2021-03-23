const express = require('express');
const cors = require('cors');
require('dotenv').config({path:'server/.env'})
const animalRouter = require('./routers/animals')

const server = express();

server.use(cors());

server.use('/animals', animalRouter);

const {SERVER_PORT} = process.env;

server.get('/', (req,res) => {
    res.send('Testing...')
})

server.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});