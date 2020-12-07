var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const app = express()

const cors = require('cors');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");


dotenv.config();
var apiKey = {
    application_key: process.env.API_KEY
 };
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(cors());
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/key', function (req, res) {
  res.send(JSON.stringify(apiKey));
})
