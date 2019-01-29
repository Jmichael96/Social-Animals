const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
// Book routes

// Google Routes
router.use("/auth", authRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;