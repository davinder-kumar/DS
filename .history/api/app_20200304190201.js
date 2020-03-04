const express = require('express')
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');
var user = require('./model/user');

const port = 1234

app.get('/', (req, res) => {
    let d = {}
    d.name = "SHubham";
    d.username = "ofshubham";
    d.email = "ofshubham@gmail.com";
    d.password = "ofshubham"
    userSave = new user(d);
    userSave.save((err, res) =>{
        if(err){
            console.log(err);
        }else{
            console.log("saved");
        }
        
    })
    res.send('Hello Worlddsfkjbvfskjdbvkjsddfgdfgdfg123456!dsfsdfssdfsfdfsd')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
