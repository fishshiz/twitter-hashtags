import React, { Component } from "react";
import TweetItem from "./tweetitem.jsx";

export default class TweetList extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.tweets) {
      const tweetItems = JSON.parse(this.props.tweets)["statuses"].map(
        tweet => <TweetItem key={tweet.id_str} text={tweet.text} />
      );
      return <ul>{tweetItems}</ul>;
    } else {
      return null;
    }
  }
}
