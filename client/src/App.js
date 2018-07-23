import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TweetList from "./tweetlist.jsx";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    console.log(typeof this.state.response);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HashTag Search</h1>
        </header>
        <TweetList tweets={this.state.response} />
      </div>
    );
  }
}

export default App;
