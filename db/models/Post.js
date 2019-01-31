const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');
// Define our model
const postSchema = new Schema({
  title: String,
  authorName: String,
  content: String,  
//   ImageURL : {
//     type: String, 
//     default : '#'
// },
  date: {
      type: String,
      default: Date.now,
  },
});
// postSchema.plugin(uniqueValidator);
// Create the model class
const ModelClass = mongoose.model('post', postSchema);

// Export the model
module.exports = ModelClass;