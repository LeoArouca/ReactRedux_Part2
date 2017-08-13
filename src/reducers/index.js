import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Telling redux how to create the app state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
