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
// Route to get all User's and populate them with their notes
router.get("/populateduser", function(req, res) {
	// Find all users
	User.find({})
	  // Specify that we want to populate the retrieved users with any associated notes
	  .populate("posts")
	  .then(function(dbUser) {
		// If able to successfully find and associate all Users and Notes, send them back to the client
		res.json(dbUser);
	  })
	  .catch(function(err) {
		// If an error occurs, send it back to the client
		res.json(err);
	  });
  });
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
router.post("/create", (req, res) =>{
    const { title, authorName, content, date } = req.body;
    // const userId = req.user;
    console.log(req.body);
    Post.create((err) => {
		if (err) {
			return res.json({
				error: `Sorry, this post already exists: ${_id}`
			})
		}
        const newPost = new Post({
			'local.title': title,
            'local.authorName': authorName,
            'local.content': content,
			'local.date': date,
        })
        newPost.save((err, dbPost) => {
            if(err) return res.json(err);
			return User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }, { new: true });

        });
    });
});

// Route for retrieving all Notes from the db
router.get("/posts", function(req, res) {
	// Find all Notes
Post.find({})
	  .then(function(dbNote) {
		// If all Notes are successfully found, send them back to the client
		res.json(dbNote);
	  })
	  .catch(function(err) {
		// If an error occurs, send the error back to the client
		res.json(err);
	  });
  });
  
  // Route for retrieving all Users from the db
  router.get("/user", function(req, res) {
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
  
module.exports = router