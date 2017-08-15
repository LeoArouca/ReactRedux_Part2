import React, { Component } from 'react';
// To plug react and redux use 'connect;
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// This will bind the action
import { bindActionCreators } from 'redux';

class BookList extends Component{

  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    );
  }
}

// Link !!! to redux
function mapStateToProps(state){
  // Whatever is return will show up as props inside of booklist
  return{
    books: state.books
  };
}

// Anything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch){
  // whenever selectbook is called , the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}


// * Whenever app state changes the container will re-render
// * state becomes props

// Return container
// Promote booklist from component to container - it needs to know about this new disptach method
// select book. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
