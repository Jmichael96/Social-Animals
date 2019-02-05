const passport = require('passport')
const LocalStrategy = require('./localStrategy');
const User = require('../db/models/User');

passport.serializeUser((id, done) => {
	console.log('=== serialize  ===')
	User.findOne({_id: id}, 'firstname lastname favoriteAnimal username',
	(err, user) =>{
		console.log(user);
		done(null, user);
	})
});

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'firstname lastname favoriteAnimal username ',
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