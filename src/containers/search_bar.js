import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // es2017 syntax. To implement, start here:
    // https://www.npmjs.com/package/babel-preset-es2017
    // ::this.example is equivalent to this.example.bind(this)
    this.onInputChange = ::this.onInputChange;
    this.onFormSubmit = ::this.onFormSubmit;

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//we don't care about state here: pass in null
export default connect(null, mapDispatchToProps)(SearchBar);