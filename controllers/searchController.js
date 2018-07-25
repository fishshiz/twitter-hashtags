require("dotenv").config({ path: "variables.env" });
var Twitter = require("twitter-node-client").Twitter;
var error = function(err, response, body) {
  console.log("ERROR [%s]", err);
};

const config = {
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_SECRET
};
var twitter = new Twitter(config);

exports.searchTweets = async (req, res) => {
  if (req.query.query) {
    let q = req.query.query.split(" ").filter(word => word.length > 0);
    q = q
      .map(el => {
        return "#".concat(el);
      })
      .join("");

    const tweets = await twitter.getSearch(
      { q: q, count: req.query.count },
      error,
      function(tweets) {
        res.json({ tweets });
      }
    );
  }
};
