const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');
// Define our model
const postSchema = new Schema({
  local: {
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
  date: {
      type: String,
      default: Date.now,
  },
}
});
// postSchema.plugin(uniqueValidator);
// Create the model class
const Post = mongoose.model('post', postSchema);

// Export the model
module.exports = Post;