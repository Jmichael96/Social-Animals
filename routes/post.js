const express = require('express')
const router = express.Router()
const Post = require("../db/models/Post");
const User = require("../db/models/User");

router.get("/posts", function (req, res) {
    Post.find().sort({ _id: -1 })
        .then((dbPost) => {
            res.json(dbPost);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.post("/create-post", (req, res, ) => {
    if (req.user) {
    Post.create(req.body)
        .then((dbPost) => {
            return User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }),Post.findOneAndUpdate({}, {$push: {users: dbUser._id}});
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

router.get("/users-posts", function (req, res) {
    if (req.user) {


    //   return User.find({ $or: [{_id: req.params._id,}, {users: {$eleMatch: {uid: String(Post.users)}}}]})

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