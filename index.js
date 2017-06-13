const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Bing = require('node-bing-api')({accKey : 'db7b5defd604421194f8c6e8278bb96f'});

app.use(bodyParser.json());
app.use(cors());


app.get('/', function (req, res) {
  res.send('Hello !')
})


app.listen(8080, function () {
  console.log(' listening on port 8080....')
})