
// state arg is not app state, but only
// the state the reducer is responsible forj
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
