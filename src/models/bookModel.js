const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    author_id: {
        type: String,
        unique: true,
        required: true
    },
    bookName:String,
    price:Number,
    ratings:Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
