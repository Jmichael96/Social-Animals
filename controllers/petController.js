// const axios = require("axios");
const db = require("../models");
const petfinder = require("pet-finder-api")(process.env.petfinder_APIKEY, process.env.petfinder_APISECRET);


module.exports = {
    findPet: function(req,res) {
        // Accessing the Petfinder API
        petfinder.findPet("dog", function(err, pets) {
            console.log(pets);
        });
    },
    findShelter: function(req,res) {
        petfinder.findShelter("houston", function(err, shelter) {
            console.log(shelter);
        });
    }
};