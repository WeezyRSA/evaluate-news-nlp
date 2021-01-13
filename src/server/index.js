var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const app = express()

const cors = require('cors');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

let srcUrl = []
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
dotenv.config();
var apiKey = {
    application_key: process.env.API_KEY
 };
 console.log(`API_KEY: ${process.env.API_KEY}`);
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
// POST 
app.post('/meanapi', async function(req, res) {
    srcUrl = req.body.url;
    const apiURL = `${baseURL}key=${apiKey.application_key}&of=json&url=${srcUrl}&model=Analysis&lang=en`
    console.log(`Source Url: ${apiURL}`);
    const response = await fetch(apiURL)
    const data = await response.json()
    console.log(data)
    res.send(data)
})
