import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import AddaBook from '../components/AddaBook';
import { getApiBook } from '../redux/books/books';

function BookList() {
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiBook());
  }, [dispatch]);

  return (
    <div>
      {
        books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))
      }
      <AddaBook />
    </div>
  );
}

export default BookList;
