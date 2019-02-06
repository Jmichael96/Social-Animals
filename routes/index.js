const router = require("express").Router();
const auth = require("./auth");
const post = require("./post");
const pets = require("./petController/pets")

// Blog API Routes
router.use(auth);
router.use(post);

// Petfinder API Routes
router.use(pets);
// Matches with "/api/pets"
router.route("/")
  .get(petController.findPet);

// Matches with "/api/shelters"
router
  .route("/:id")
  .get(petController.findShelter);
module.exports = router;