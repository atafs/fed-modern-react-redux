import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    console.log('CONTAINER BOOK_DETAILS', this.props)
    if (!this.props.book) {
      return <div><strong>{`Select a book to get started!!`}</strong></div>
    }

    return (
      <div>
        <h3>Details of the Book:</h3>
        <div>{`Title: ${this.props.book.title}`}</div>
        <div>{`Pages: ${this.props.book.pages}`}</div>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
