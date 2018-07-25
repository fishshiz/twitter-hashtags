import React, { Component } from "react";
import "./App.css";
import TweetList from "./tweetlist.jsx";
import SearchComponent from "./searchcomponent.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: "",
      sortBy: "favorites"
    };
    this.recieveSearchData = this.recieveSearchData.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  // I send a callback to the search component, this allows the child component to bubble up the results to the App component, so it can share that information to the Tweet Listings component
  recieveSearchData(searchData) {
    this.setState({ response: searchData.tweets });
  }

  // I used another callback to share sorting information from the search comonent to the tweet list via the App component
  sortBy(childData) {
    this.setState({ sortBy: childData });
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/search");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span className="hashtag">#</span>HashTag Lookup
          </h1>
          <SearchComponent
            action={this.recieveSearchData}
            sortBy={this.sortBy}
          />
        </header>
        <TweetList tweets={this.state.response} sortBy={this.state.sortBy} />
      </div>
    );
  }
}

export default App;
