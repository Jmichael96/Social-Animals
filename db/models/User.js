const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
	avatar:{type: String, required: false, 
	default: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj08OKbqqHgAhUGYK0KHciWDMsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F264157&psig=AOvVaw1uBnvOuq_f29IvwiClCiUg&ust=1549343968063126"},
	
	firstname:{type: String, required: false},
	lastname:{type: String, required:false},
	favoriteAnimal: {type: String, required: false},
	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
	posts: [
			{
			  // Store ObjectIds in the array
			  type: Schema.Types.ObjectId,
			  // The ObjectIds will refer to the ids in the Note model
			  ref: "Post"
			}
		],

})

// Define schema methods
userSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})
// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User