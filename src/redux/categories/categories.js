// Defining action types to check the status
const ADD_CATEGORY = 'bookStore/books/ADD_CATEGORY';
const CATEGORY_STATUS = 'Still under construction';

// Setting initial state
const initialState = [];

// exporting action creators
export const addaCategory = () => ({
  type: ADD_CATEGORY,
  payload: {
    text: CATEGORY_STATUS,
  },
});

// Category Reducers
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return action.payload.text;

    default:
      return state;
  }
};

export default categoryReducer;
