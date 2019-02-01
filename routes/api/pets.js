const express = require("express");
const router = express.Router()
const petController = require("../../controllers/petController");
const 


const petfinder = require("pet-finder-api")(process.env.petfinder_APIKEY, process.env.petfinder_APISECRET);


petfinder.findPet("dog", function (err, pets) {
    console.log(pets);
});

petfinder.findShelter("houston", function (err, shelter) {
    console.log(shelter);
});


module.exports = router;