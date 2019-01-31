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
    Post.findOne({ '_id': req.params.id}), (err, postMatch) => {
		if (postMatch) {
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
        newPost.save((err, savedPost) => {
            if(err) return res.json(err);
            return res.json(savedPost);
        });
    };
});
module.exports = router