const express = require('express')
const router = express.Router()
const Post = require("../db/models/Post");
const User = require("../db/models/User");
const cloudinary = require('cloudinary');
const formData = require('express-form-data');
require('dotenv').config()

// const cors = require('cors');
// const { CLIENT_ORIGIN } = require('../config');

router.get("/posts", function (req, res) {
    Post.find().sort({ _id: -1 })
        .then((dbPost) => {
            res.json(dbPost);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.post("/create-post", (req, res) => {
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
});

router.get("/user-profile", (req, res) =>{
    if(req.user){
        User.find({_id: req.user._id})
        .then((dbUser) =>{
            res.json(dbUser);
        })
        .catch((err) =>{
            res.json(err);
        })
    }else{
        res.json(null);
    };
});

router.get("/users-posts", function(req, res) {
    if(req.user){
    User.find({_id: req.user._id})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("posts")
      .then(function(dbUser) {

          res.json(dbUser);     
        // If able to successfully find and associate all Users and Notes, send them back to the client
        
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
    }else{
        res.json(null);
    }
  });

module.exports = router;