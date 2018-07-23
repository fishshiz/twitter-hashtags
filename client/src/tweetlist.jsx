import React, { Component } from "react";
import TweetItem from "./tweetitem.jsx";

export default class TweetList extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.tweets) {
      const tweetItems = JSON.parse(this.props.tweets)["statuses"].map(
        tweet => (
          <TweetItem
            key={tweet.id_str}
            tweet={tweet}
            text={tweet.text}
            user={tweet.user}
          />
        )
      );
      console.log(JSON.parse(this.props.tweets)["statuses"][0]);
      return <ul className="tweet-list">{tweetItems}</ul>;
    } else {
      return null;
    }
  }
}
