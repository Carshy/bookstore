import { v4 as uuidv4 } from 'uuid';

// Defining Action types to add and remove a book
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Setting the initial state
const initialState = [
  {
    id: uuidv4(),
    genre: 'Non-Fiction',
    title: 'The Secret',
    author: 'Rhonda Byrne',
  },

  {
    id: uuidv4(),
    genre: 'Self-Help',
    title: '48 Laws of Power',
    author: 'Robert Green',
  },

  {
    id: uuidv4(),
    genre: 'Self-Help',
    title: 'Why Men Marry Bitches',
    author: 'Sherry Argov',
  },
];

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
  type: REMOVE_BOOK,
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
