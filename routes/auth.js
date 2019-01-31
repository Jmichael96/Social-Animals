const express = require('express')
const router = express.Router()
const User = require('../db/models/User');
const passport = require('../passport');
const Post = require("../db/models/Post");


// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
// router.get(
// 	'/google/callback',
// 	passport.authenticate('google', {
// 		successRedirect: '/',
// 		failureRedirect: '/login'
// 	})
// )
 
// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})
// Route for retrieving all Notes from the db
router.get("/posts", function(req, res) {
	// Find all Notes
	Post.find({})
	  .then(function(dbPost) {
		// If all Notes are successfully found, send them back to the client
		res.json(dbPost);
	  })
	  .catch(function(err) {
		// If an error occurs, send the error back to the client
		res.json(err);
	  });
  });
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
// router.get("/users", (req, res) =>{
// 	User.find({})
// 	.then((dbUser) =>{
// 		res.json(dbUser);
// 	})
// 	.catch((err) =>{
// 		res.json(err);
// 	});
// });
// // Route to get all User's and populate them with their notes
// router.get("/users/:id", function(req, res) {
// 	// Find all users
// 	User.findOne({ _id: req.params.id })
// 	  // Specify that we want to populate the retrieved users with any associated notes
// 	  .populate("post")
// 	  .then(function(dbUser) {
// 		// If able to successfully find and associate all Users and Notes, send them back to the client
// 		res.json(dbUser);
// 	  })
// 	  .catch(function(err) {
// 		// If an error occurs, send it back to the client
// 		res.json(err);
// 	  });
//   });
//   router.post("/users/:id", function(req, res) {
// 	// Create a new note and pass the req.body to the entry
// 	Post.create(req.body)
// 	  .then(function(dbPost) {
// 		// If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
// 		// { new: true } tells the query that we want it to return the updated User -- it returns the original by default
// 		// Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
// 		return User.findOneAndUpdate({ _id: req.params.id }, { post: dbPost._id }, { new: true });
// 	  })
// 	  .then(function(dbUser) {
// 		// If we were able to successfully update an Article, send it back to the client
// 		res.json(dbUser);
// 	  })
// 	  .catch(function(err) {
// 		// If an error occurred, send it to the client
// 		res.json(err);
// 	  });
//   });
  
router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

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
  

  
module.exports = router