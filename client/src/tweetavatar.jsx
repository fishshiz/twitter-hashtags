import React, { Component } from "react";

export default class TweetAvatar extends Component {
  render() {
    return (
      <div className="avatar-container">
        <img className="user-avatar" src={this.props.user.profile_image_url} />
        <h3 className="user-name">{this.props.user.name}</h3>
      </div>
    );
  }
}
