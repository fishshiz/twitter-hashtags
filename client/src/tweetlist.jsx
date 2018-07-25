import React, { Component } from "react";
import TweetItem from "./tweetitem.jsx";

export default class TweetList extends Component {
  constructor() {
    super();
    this.state = {
      tweets: null,
      sortBy: "favorites"
    };
    this.sort = this.sort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: this.props.tweets,
      sortBy: this.props.sortBy
    });
  }

  sort(tweets, sort = this.props.sortBy) {
    // Depending on the props sent down by the parent App component, we can sort tweets by favorites or retweets.
    let sortedArr;
    if (sort === "favorites") {
      sortedArr = tweets.sort(function(a, b) {
        return a.favorite_count > b.favorite_count
          ? -1
          : b.favorite_count > a.favorite_count
            ? 1
            : 0;
      });
    } else {
      sortedArr = tweets.sort(function(a, b) {
        return a.retweet_count > b.retweet_count
          ? -1
          : b.retweet_count > a.retweet_count
            ? 1
            : 0;
      });
    }
    return sortedArr;
  }

  render() {
    if (this.props.tweets) {
      let tweetItems = JSON.parse(this.props.tweets)["statuses"];
      tweetItems = this.sort(tweetItems);
      tweetItems = tweetItems.map(tweet => (
        <TweetItem
          key={tweet.id_str}
          tweet={tweet}
          text={tweet.text}
          user={tweet.user}
        />
      ));

      return <ul className="tweet-list">{tweetItems}</ul>;
    } else {
      return (
        <div className="tweet-list-ph">
          <span>Use the search bar above to search for hashtags.</span>
        </div>
      );
    }
  }
}
