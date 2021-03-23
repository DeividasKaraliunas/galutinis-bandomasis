const express = require('express');
const cors = require('cors');
require('dotenv').config({path:'server/.env'})

const app = express();

app.use(cors());

const {SERVER_PORT} = process.env;

app.get('/', (req,res) => {
    res.send('Testing...')
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});