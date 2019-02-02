const express = require('express')
const router = express.Router()
const Post = require("../db/models/Post");
const User = require("../db/models/User");
const mongoose = require("mongoose");
// const User = require("../db/models/User");

router.get("/posts", function (req, res) {
    Post.find().sort({ _id: -1 })
        .then((dbPost) => {
            res.json(dbPost);
        })
        .catch((err) => {
            res.json(err);
        })

});

// Route for retrieving all Users from the db
router.get("/users", function (req, res) {
    // Find all Users
    User.find({})
        .then(function (dbUser) {
            // If all Users are successfully found, send them back to the client
            res.json(dbUser);
        })
        .catch(function (err) {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});

router.post("/create-post", (req, res) => {
    // const { title, authorName, content, contact, date } = req.body;
    // // const userId = req.user;
    // console.log(req.body);
    
    Post.create(req.body)
        .then((dbPost) => {
            return User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }, { new: true });
        })
        .then((dbUser) => {
            res.json(dbUser);
        })
        .catch((err) => {
            res.json(err);
        });
    // const author = new User({
    //     _id: mongoose.Types.ObjectId(),
    //     username: User,
    // });
    // author.save(function (err) {
    //     if (err) return handleError(err);

    //     const newPost = new Post({
    //         'title': title,
    //         'authorName': authorName,
    //         'content': content,
    //         'contact': contact,
    //         'date': date,
    //         'author': author._id,
    //     })
    //     newPost.save((err, dbPost) => {
    //         if (err) {
    //             return res.json(err);
    //         } else {
    //             res.json(dbPost);
    //         }
    //     });
    // });
});
router.get("/users-posts", function(req, res) {
    // Find all users
    User.find({})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("posts")
      .then(function(dbUser) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser);
        console.log(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });
module.exports = router;