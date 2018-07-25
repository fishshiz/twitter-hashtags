const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.get("/", function(req, res, next) {
  res.status(200).send("Hi, It works!");
});

router.get("/api/search", searchController.searchTweets);

module.exports = router;
