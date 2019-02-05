const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');
// Define our model
const postSchema = new Schema({
  authorName: {type: String},
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  images: {
    type: String,
  },
  contact: {
    type: String,
  },
  date: {
    type: String,
  },
  users: {type: Schema.Types.ObjectId, ref: 'User'},
});
// postSchema.plugin(uniqueValidator);
// Create the model class
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;