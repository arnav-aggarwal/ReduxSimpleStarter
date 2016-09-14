import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = ::this.onInputChange;

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    // Input button is a controlled field - form element where
    // the value of the input is set by the state - not the other
    //way around
    return (
      <form className="input-group">
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