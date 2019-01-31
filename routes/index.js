const router = require("express").Router();
const auth = require("./auth");
const post = require("./post");

// API Routes
router.use(auth);
router.use(post);

module.exports = router;