import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const baseReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = configureStore({ reducer: baseReducer });

export default store;
