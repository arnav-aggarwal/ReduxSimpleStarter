import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    // es2017 syntax. To implement, start here:
    // https://www.npmjs.com/package/babel-preset-es2017
    // ::this.example is equivalent to this.example.bind(this)
    this.onInputChange = ::this.onInputChange;

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    // Input button is a controlled field - form element where
    // the value of the input is set by the state - not the other
    // way around
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a5-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term} 
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}