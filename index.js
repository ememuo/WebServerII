const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World')
})
const PORT = process.env. PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}` )
});


app.get('/api/hello', async(req, res) => {
    const visitorName = req.query.visitor_name || 'Mark';
    const client_ip = req.socket.remoteAddress;
    const location = 'New York'
    const temp = 11;
    res.json({
        clientIP : client_ip,
        location: location,
        greeting: `Hello, ${visitorName}! Thre temperature is ${temp} degrres Celsius in ${location}.`
    })
})