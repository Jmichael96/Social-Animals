const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');
// Define our model
const postSchema = new Schema({
    title: {
      type: String,
    },
    authorName: {
      type: String,
    },
    content: {
      type: String,
    },
    //   ImageURL : {
    //     type: String, 
    //     default : '#'
    // },
    contact: {
      type: String,
    },
    date:{
      type: String,
    },
});
// postSchema.plugin(uniqueValidator);
// Create the model class
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;