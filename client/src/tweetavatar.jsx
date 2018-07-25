import React, { Component } from "react";

export default class TweetAvatar extends Component {
  render() {
    let name =
      this.props.user.name.length > 24
        ? this.props.user.name.slice(0, 21).concat("...")
        : this.props.user.name;
    return (
      <div className="avatar-container">
        <img
          className="user-avatar"
          alt=""
          src={this.props.user.profile_image_url}
        />
        <h3 className="user-name">{name}</h3>
      </div>
    );
  }
}
