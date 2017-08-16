export function selectBook(book){
  // selectBook is an action creator, it needs to return an action,
  // an object with a type property

  // Every action must have a type to describe it
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
