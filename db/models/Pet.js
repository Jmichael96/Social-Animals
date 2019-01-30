const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    age: Boolean,
    sex: String,
    description: String,
    shelter: {type: String, required: true},
    contact: String
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;