const router = require("express").Router();
const petController = require("../../controllers/petController");

// Matches with "/api/pets"
router.route("/")
  .get(petController.findPet);

// Matches with "/api/shelters"
router
  .route("/:id")
  .get(petController.findShelter);

module.exports = router;