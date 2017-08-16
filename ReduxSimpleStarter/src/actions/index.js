export function selectBook(book) {
  console.log('ACTION: BOOK_SELECTED', book)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
