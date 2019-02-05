const express = require('express')
const router = express.Router()
const Post = require("../db/models/Post");
const User = require("../db/models/User");
// route to get all posts
router.get("/posts", function (req, res) {
    Post.find().sort({ _id: -1 })
        .then((dbPost) => {
            res.json(dbPost);
        })
        .catch((err) => {
            res.json(err);
        })
});
// route to create a post and insert data in User and Post Schema
router.post("/create-post", (req, res, ) => {
    if (req.user) {
        Post.create(req.body)
            .then((dbPost) => {
                return User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }), Post.findOneAndUpdate({}, { $push: { users: dbUser._id } });
            })
            .then((dbUser) => {
                res.json(dbUser);
            })
            .catch((err) => {
                res.json(err);
            });
    } else {
        res.json(null);
    }
});
// route to get only users posts
router.get("/users-posts", function (req, res) {
    if (req.user) {
        Post.find()
            // Specify that we want to populate the retrieved users with any associated notes
            .populate("users")
            .then(function (dbPost) {

                res.json(dbPost);
                // If able to successfully find and associate all Users and Notes, send them back to the client

            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    } else {
        res.json(null);
    }
});
module.exports = router;