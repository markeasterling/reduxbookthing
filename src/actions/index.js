export function selectBook(book) {
// selectbook is an action bindActionCreator
// it needs to return an
// action(an object with a type property)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
