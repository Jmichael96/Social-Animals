const express = require('express')
const router = express.Router()
const Post = require("../db/models/Post");
// const User = require("../db/models/User");

router.get("/new", function (req, res) {
    db.Post.find({}).then(function (dbPost) {
        //  res.json(dbPost);
        db.User.findOne({
            where: {
                id: req.user
            },
            raw: true
        }).then(function (dbUser) {
            res.render("newPost", {
                loginStatus: true,
                data: dbPost, dbUser
            });
        });
    });
});
// app.route('/create')
//         .get(function(req,res){
//             Category.find({},function(err,cats){
//                 if(err) console.log(err);
//                 return res.render('newPost',{user : req.cookies.decoded._doc,cats : cats});
//             });
           
//         })
//         .post(function(req,res){
//                var tags = tagsToArray(req.body.tags); 
//                 var post = new Post({
//                     Title: req.body.title,
//                     Author : req.cookies.decoded._doc.username,
//                     Content: req.body.content,
//                     ImageURL : req.body.image,
//                     tags : tags,
//                     PublishDate: new Date().toLocaleDateString()
//                 });
//                 post.save(function(err){
//                     if(err) throw err;
//                     for(var t in tags ){
//                         var x = new Tag({Name: tags[t]});
//                         x.save();
//                     }
//                     return res.redirect('/controlpanel/posts');
//                 });
                
//             }
//         );
//routes for posting blogs


module.exports = router;