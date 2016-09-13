//Creates a new piece of app state when the
//bookSelected action was triggered


// State arg is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  //must always return a non-undef. value
  return state;
}