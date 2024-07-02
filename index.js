const express = require("express");
const app = express();
const bodyparser = require('body-parser')

app.use(express.json()); app.use(express.urlencoded({ extended: true }));

const PORT = process.env. PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}` )
});


app.get('/api/hello', async(req, res) => {
    const visitorName = req.query.visitor_name || 'Mark';
    const client_ip = req.ip;

    const response = await fetch (`https://ipapi.co/${client_ip}/json/`);
    const data = await response.json();
    const {city, region_name, country_name, latitude, longitude } = data;
    const temperature = 11
    
    res.json({
        clientIP : client_ip,
        location: `${city}`,
        greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrres Celsius in ${city}.`
    })
})

module.exports = app;
