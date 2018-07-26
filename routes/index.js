const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

// search route delegates to searchController
router.get("/api/search", searchController.searchTweets);
module.exports = router;
