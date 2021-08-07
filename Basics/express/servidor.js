const express = require('express');
const app = express();

app.get('/', start);
app.get('/', courses);

function start(req, res){
    res.send('Este es el home');
}

function courses(req, res){
    res.send('Este es el course');
}

app.listen(8989);