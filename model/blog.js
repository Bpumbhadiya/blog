const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : String,
    discription : String, 
    image : String,
    catagory : { type: Schema.Types.ObjectId, ref: 'catagory' },
    user : { type: Schema.Types.ObjectId, ref: 'admin' }
});

const BLOG = mongoose.model('blog', blogSchema);

module.exports = BLOG;
