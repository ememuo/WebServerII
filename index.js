const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const app = express();
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('Hello World')
})
const PORT = process.env. PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}` )
});


app.get('/api/hello', (req, res) => {
    const visitorName = req.query.visitor_name || 'visitor';
    const client_ip = req.socket.remoteAddress;
    const location = 'New York';
    const temp = 11;
    res.json({
        clientIP : client_ip,
        location: location,
        greeting: `Hello, ${visitorName}! Thre temperature is ${temp} degrres Celsius in ${location}.`
    })
})