const express = require('express')
const router = express.Router()
const Post = require("../db/models/Post");
const User = require("../db/models/User");
// const User = require("../db/models/User");

router.get("/posts", function (req, res) {
        //  res.json(dbPost);
        Post.find({})
        .then((dbPost) =>{
            res.json(dbPost);
        })
        .catch((err) =>{
            res.json(err);
        })   
});

// Route for grabbing a specific Article by id, populate it with it's note
router.get("/post", function(req, res) {

    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    User.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("posts")

      .then(function(dbUser) {
        // If we were able to successfully find an Article with the given id, send it back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

// // Route for retrieving all Notes from the db
// router.get("/posts", function(req, res) {
// 	// Find all Notes
// 	Post.find({})
// 	  .then(function(dbPost) {
// 		// If all Notes are successfully found, send them back to the client
// 		res.json(dbPost);
// 	  })
// 	  .catch(function(err) {
// 		// If an error occurs, send the error back to the client
// 		res.json(err);
// 	  });
//   });
    // Route for retrieving all Users from the db
	router.get("/users", function(req, res) {
		// Find all Users
		User.find({})
		  .then(function(dbUser) {
			// If all Users are successfully found, send them back to the client
			res.json(dbUser);
		  })
		  .catch(function(err) {
			// If an error occurs, send the error back to the client
			res.json(err);
		  });
	  });

      router.post("/create-post", (req, res) =>{
        const { title, authorName, content, date } = req.body;
        // const userId = req.user;
        console.log(req.body); 
        Post.create(req.body)
        .then((dbPost) =>{
            return User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }, { new: true });
        })
        .then((dbUser) =>{
            res.json(dbUser);
        })
        .catch((err) =>{
            res.json(err);
        });
            const newPost = new Post({
                'local.title': title,
                'local.authorName': authorName,
                'local.content': content,
                'local.date': date,
            })
            newPost.save((err, dbPost) => {
                if(err) return res.json(err);
    
            });
        
    });
    
    router.get("/populateduser", (req,res) =>{
        User.find({})
        .populate("posts")
        .then((dbUser) =>{
            res.json(dbUser);
        })
        .catch((err) =>{
            res.json(err);
        });
    });
      
module.exports = router;