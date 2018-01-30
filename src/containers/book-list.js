import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {


  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // takes in entire application state, and whever is returned
  // will show up as props in this container
  return {books: state.books}
}


  //anything returned will end up as props
  //on BookList container
  function mapDispatchToProps(dispatch) {
    //whenever select book is called,
    //the result should be passed to  all of our readers
    return bindActionCreators({selectBook: selectBook}, dispatch);
  }

//promote booklist from a component to a container
//it needs to know about the new dispatch method, select book
//make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
// connect takes a function and a compnent and produces a container
