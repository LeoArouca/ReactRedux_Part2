import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// Telling redux how to create the app state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
