const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//apiKey expires in 30 days
const Bing = require('node-bing-api')({accKey : 'db7b5defd604421194f8c6e8278bb96f'});

const searchTerm = require("./models/searchTerm.js");

app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost/searchTerms')

app.get('/api/searchimage/:searchVal*',(req,res)=>{
    var searchVal= req.params.searchVal ;
    var offset = req.query.offset ;
    
    var data = new searchTerm({
        searchVal,
        searchDate : new Date()
    });
    data.save(err=>{
        if (err){
            res.send("error in saving to db")
        }
        res.json(data)
    })
    // res.json({
    //     searchVal,
    //     offset
    // })
})

app.get('/api/recentsearchs',(req,res)=>{
    searchTerm.find({},(err,data)=>
    {
    res.json(data)
    })
})


app.get('/', function (req, res) {
  res.send('Hello !')
})


app.listen(8080, function () {
  console.log(' listening on port 8080....')
})