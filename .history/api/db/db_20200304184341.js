const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0-misx3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


export default db