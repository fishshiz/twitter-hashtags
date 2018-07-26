require("dotenv").config({ path: "variables.env" });

// I used the TwitterJSClient to help make my requests https://github.com/BoyCook/TwitterJSClient
var Twitter = require("twitter-node-client").Twitter;

// import environmental variables to access the twitter api. I used the dotenv pachage to keep my keys hidden.
const config = {
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_SECRET
};
var twitter = new Twitter(config);

var error = function(err, response, body) {
  console.log("ERROR [%s]", Object.values(err));
};

exports.searchTweets = async (req, res) => {
  if (req.query.query) {
    // req should be recieved as a space separated string, I then concat "#" to each word in the string to search for hashtags.
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
