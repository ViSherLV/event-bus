const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(cors())
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const { event, data } = req.body;
    try {
        axios.post('http://localhost:3001/events', req.body)
        axios.post('http://localhost:3002/events', req.body)
        res.send({ status: 'ok' })
    } catch (e) {
        console.log(`error: ${e}`)
    }

});

app.listen(3003, function () {
    console.log("Event Bus is On");
});


