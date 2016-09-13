import React, { Component } from 'react';
//define a component as a container instead of a
//component. Container is a React component that that
//has a direct connection to the state held by Redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside of BookList
  return {
    books: state.books,
  };
}

//anything returned from this fn will end up as props
//on BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}


//Promote BookList from component to container - needs to know
//about this new dispatch method, selectBook. Make it available
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);