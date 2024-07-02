const express = require("express");
const app = express();
const axios = require("axios")
const bodyparser = require('body-parser')

app.use(express.json()); app.use(express.urlencoded({ extended: true }));

const PORT = process.env. PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}` )
});


app.get('/api/hello', async(req, res) => {
    const visitorName = req.query.visitor_name || 'Mark';
    const client_ip = req.ip;

    const api_url = `https://ipapi.co/${client_ip}/json/`;

    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    const temperature = 11
    
    res.json({
        clientIP : client_ip,
        location: `${city}`,
        greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrres Celsius in ${city}.`
    })
})

module.exports = app;
