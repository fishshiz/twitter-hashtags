import React, { Component } from "react";
import TweetAvatar from "./tweetavatar.jsx";
import TweetInfo from "./tweetinfo.jsx";
import Linkify from "react-linkify";

export default class TweetItem extends Component {
  render() {
    return (
      <li className="tweet-card">
        <TweetAvatar user={this.props.user} />
        <div className="tweet-text-container">
          <Linkify properties={{ target: "_blank" }} className="tweet-text">
            {this.props.text}
          </Linkify>
        </div>
        <TweetInfo tweet={this.props.tweet} />
      </li>
    );
  }
}
