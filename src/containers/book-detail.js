import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (<div>pick a book, bitch</div>)

    }


    return (
      <div>
        <h3>deets </h3>
        <div>
          name: { this.props.book.title }
        </div>
        <div>
          sides of paper: {this.props.book.pages}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail)
