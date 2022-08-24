// Defining Action types to add and remove a book
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/ADD_BOOK';

// Setting the initial state
const initialState = [];

// exporting Action creators
export const addaBook = (id, title, author) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    author,
  },
});

export const removeaBook = (id) => ({
  type: ADD_BOOK,
  payload: {
    id,
  },
});

// Book Reducer to modify state actions
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
