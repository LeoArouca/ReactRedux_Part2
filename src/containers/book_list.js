import React, { Component } from 'react';
// To plug react and redux use 'connect;
import { connect } from 'react-redux';

class BookList extends Component{

  renderList(){
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className='list-group-item'>{book.title}</li>
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

// * Whenever app state changes the container will re-render
// * state becomes props


// Return container
export default connect(mapStateToProps)(BookList);
