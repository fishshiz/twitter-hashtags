import React, { Component } from "react";

export default class SearchComponent extends Component {
  constructor() {
    super();
    this.state = { query: "", number: "", sort: "favorites" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    if (property === "sort") {
      return e => {
        this.props.sortBy(e.target.value);
        this.setState({
          [property]: e.target.value
        });
      };
    } else {
      return e =>
        this.setState({
          [property]: e.target.value
        });
    }
  }

  fetchResponse() {
    let query = this.state.query.split(/[#, ]+/).join(" ");
    return fetch(`/api/search?query=${query}&count=${this.state.number}`)
      .then(res => res.json())
      .then(function(json) {
        return json;
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchResponse().then(result => {
      if (JSON.parse(result.tweets).statuses.length > 0) {
        this.props.action(result);
      } else {
        window.alert(
          "Counldn't find any tweets with that hashtag combination 😞"
        );
      }
    });
  }

  render() {
    return (
      <form className="search-component" onSubmit={this.handleSubmit}>
        <label
          className="field a-field a-field_a1 page__field"
          value={this.state.query}
          onChange={this.handleChange("query")}
        >
          <input className="field__input" placeholder="ex. #linqia" />
          <span className="field__label-wrap">
            <span className="field__label">Search for:</span>
          </span>
        </label>
        <label className="field a-field a-field_a2 page__field">
          <input
            className="field__input"
            placeholder="min: 1, max: 100"
            type="number"
            value={this.state.number}
            onChange={this.handleChange("number")}
            min="1"
            max="100"
            required
          />
          <span className="field__label-wrap">
            <span className="field__label">Limit search to:</span>
          </span>
        </label>
        <label className="field a-field page__field">
          <select
            className="field__input"
            value={this.state.sort}
            onChange={this.handleChange("sort")}
          >
            <option value="favorites">Most Favorites</option>
            <option value="retweets">Most Retweets</option>
          </select>
          <span className="field__label-wrap sort-by">
            <span className="field__label">Sort by:</span>
          </span>
        </label>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}
