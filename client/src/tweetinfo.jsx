import React, { Component } from "react";

export default class TweetInfo extends Component {
  render() {
    return (
      <div className="tweet-info">
        <div className="tweet-metrics">
          <p className="metric-container">
            <i className="fas fa-heart fa-2x" />{" "}
            <span className="metric-count">
              {this.props.tweet.favorite_count}
            </span>
          </p>
          <p className="metric-container">
            <i className="fas fa-retweet fa-2x" />
            <span className="metric-count">
              {this.props.tweet.retweet_count}
            </span>
          </p>
        </div>
        <p className="timestamp">{this.props.tweet.created_at}</p>
      </div>
    );
  }
}
