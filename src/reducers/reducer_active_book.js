// Reducers always have these 2
// Action is the action
// State argument is not the app state, only the state that the reducer is responsible for

// Default to null to avoid the error when this loads the first time before the first click
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
