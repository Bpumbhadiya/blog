const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catagorySchema = new Schema({
    name: String,
    images: String
});

const CATAGORY = mongoose.model('catagory', catagorySchema);

module.exports = CATAGORY;
