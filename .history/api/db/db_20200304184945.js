const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cluster0-misx3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
module.exports=mongoose;


// export default db;