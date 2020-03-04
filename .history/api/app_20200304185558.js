const express = require('express')
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');
var user = require('../model/userModel');

const port = 1234

app.get('/', (req, res) => {
    let d = {}
    d.name = "SHubham";
    d.username = "ofshubham";
    d.email = "ofshubham@gmail.com";
    d.password = "ofshubham"
    userSave = new user(d);
    userSave.save()
    res.send('Hello Worlddsfkjbvfskjdbvkjsddfgdfgdfg123456!dsfsdfssdfsfdfsd')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
