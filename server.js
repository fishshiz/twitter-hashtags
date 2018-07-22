const express = require("express");
require("dotenv").config({ path: "variables.env" });
//Callback functions
var error = function(err, response, body) {
  console.log("ERROR [%s]", err);
};
var success = function(data) {
  console.log("Data [%s]", data);
  datum = data;
};

var Twitter = require("twitter-node-client").Twitter;

//Get this data from your twitter apps dashboard
const config = {
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_SECRET
};
let datum;
var twitter = new Twitter(config);
twitter.getSearch({ q: "#haiku", count: 10 }, error, success);

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.json({
    express: datum
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
