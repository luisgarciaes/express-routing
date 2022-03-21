var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('<html><head></head><body><h1>Hola mundito</h1></body></html>')
});
app.get('/api', (req, res) =>{
    res.json({ firstname: 'Luis', lastname: 'Garcia'})
});

app.listen(port);