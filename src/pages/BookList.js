import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddaBook from '../components/AddaBook';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {
        books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            book={book}
          />
        ))
      }
      <AddaBook />
    </div>
  );
}

export default BookList;
