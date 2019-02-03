const passport = require('passport')
const LocalStrategy = require('./localStrategy');
const User = require('../db/models/User');

passport.serializeUser((user, done) => {
	console.log('=== serialize  ===')
	console.log(user) // the whole raw user object!
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'firstName lastName photos username',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)

module.exports = passport
