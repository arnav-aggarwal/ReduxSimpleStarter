export function selectBook(book) {
  //this is an ActionCreator, needs to return an action,
  //an obj with a type propery that flows through all of
  //our different reducers. Reducers can use that action to
  //produce a value for that particular piece of state. 
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}