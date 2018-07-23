import React, { Component } from "react";
import TweetAvatar from "./tweetavatar.jsx";
import TweetInfo from "./tweetinfo.jsx";

export default class TweetItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li className="tweet-card">
        <TweetAvatar user={this.props.user} />
        <div className="tweet-text-container">
          <p className="tweet-text">{this.props.text}</p>
        </div>
        <TweetInfo tweet={this.props.tweet} />
      </li>
    );
  }
}
