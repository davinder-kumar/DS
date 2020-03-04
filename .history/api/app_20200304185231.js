const express = require('express')
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');  
var route = require("express").Router();
const mongoose = require('mongoose');
var user = require('../model/userModel');
var mtoken = require('../model/tokenModel');
var roles = require("../model/roleModel");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const User = mongoose.model('User');

const port = 1234

app.get('/', (req, res) => {
    db.
    res.send('Hello Worlddsfkjbvfskjdbvkjsddfgdfgdfg123456!dsfsdfssdfsfdfsd')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
