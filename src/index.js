const mongoose = require('mongoose');
const express = require('express');

const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();

const uri = "mongodb+srv://mahesh:Mahesh@7@cluster0.boenb.mongodb.net/MyDB?retryWrites=true&w=majority";

mongoose.connect()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route); 

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
