// Defining Action types to add and remove a book
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

// API base URL
const apiBaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PSFj0czVU733DeeFoskd/books';

// Setting the initial state
const bookArray = [];

// exporting Action creators*****************************
// Add book to the API
export const addaBook = (book) => (dispatch) => fetch(apiBaseUrl, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(book),
})
  .then((response) => {
    if (response.ok) {
      dispatch({
        type: ADD_BOOK,
        payload: book,
      });
    }
  });

// Receive Book from the API
export const getApiBook = () => (dispatch) => fetch(apiBaseUrl)
  .then((res) => res.json())
  .then((data) => {
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({
      type: GET_BOOK,
      payload: books,
    });
  })
  .catch(() => {});

// Remove a Book
export const removeaBook = (id) => async (dispatch) => {
  const body = {
    item_id: id,
  };
  return fetch(
    `${apiBaseUrl}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    },
  )
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: REMOVE_BOOK,
          payload: id,
        });
      }
    }).catch(() => {});
};

// Book Reducer to modify state actions
const bookReducer = (state = bookArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    case GET_BOOK:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [...state, action.payload];

//     case REMOVE_BOOK:
//       return state.filter((book) => book.id !== action.payload);
//     case GET_BOOK:
//       return [
//         ...action.payload,
//       ];

//     default:
//       return state;
//   }
// };

export default bookReducer;
