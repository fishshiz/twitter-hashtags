const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.get("/api/search", searchController.searchTweets);

router.get("/", function(req, res, next) {
  res.status(200);
});
module.exports = router;
