const express = require('express')
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');
const port = 1234

app.get('/', (req, res) => {
    db.
    res.send('Hello Worlddsfkjbvfskjdbvkjsddfgdfgdfg123456!dsfsdfssdfsfdfsd')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
