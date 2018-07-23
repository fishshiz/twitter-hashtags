import React, { Component } from "react";

export default class TweetInfo extends Component {
  render() {
    return (
      <div className="tweet-info">
        <div className="tweet-metrics">
          <p>
            <i className="fas fa-heart fa-2x" />{" "}
            {this.props.tweet.favorite_count}
          </p>
          <p>
            <i className="fas fa-retweet fa-2x" />{" "}
            {this.props.tweet.retweet_count}
          </p>
        </div>
        <p className="timestamp">{this.props.tweet.created_at}</p>
      </div>
    );
  }
}
