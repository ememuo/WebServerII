const express = require("express");
const app = express();
const axios = require("axios")
const bodyparser = require('body-parser')

app.set('trust proxy', true)
app.use(express.json()); app.use(express.urlencoded({ extended: true }));


app.get('/api/hello', async(req, res) => {
    const visitorName = req.query.visitor_name || 'Visitor';
    let clientIP = req.headers['x-forwarded-for'] || req.ip;
    if (clientIP === '::1' || clientIP === '127.0.0.1') {
        clientIP = '8.8.8.8';
    }
    
    const response = await fetch (`https://ipapi.co/${clientIP}/json/`);
    const data = await response.json();
    const {city, region_name, country_name, latitude, longitude } = data;
    const temperature = 11
    res.json({
        client_ip : clientIP,
        location: `${city}`,
        greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrres Celsius in ${city}.`
    })
})


const PORT = process.env. PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}` )
});

module.exports = app;
