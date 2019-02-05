const express = require('express')
const router = express.Router()
const User = require('../db/models/User');
const passport = require('../passport');
const mongoose = require("mongoose");

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

router.get("/user-profile", (req, res) =>{
    if(req.user){
        User.find({_id: req.user._id})
        .then((dbUser) =>{
            res.json(dbUser);
        })
    }else{
        res.json({ user: null });
    };
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
	const { firstname, lastname, favoriteAnimal, username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const author = new User({
			'_id': new mongoose.Types.ObjectId(),
			'firstname': firstname,
			'lastname': lastname,
			'favoriteAnimal': favoriteAnimal,
			'username': username,
			'password': password
		})
		author.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})
module.exports = router