import React, { Component } from "react";

export default class TweetItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>
        <p>{this.props.text}</p>
      </li>
    );
  }
}
