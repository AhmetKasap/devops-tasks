const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    categoryName : {type : String, require:true},
    shortText : {type : String}
},{timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
