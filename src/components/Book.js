import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeaBook } from '../redux/books/books';
import '../styles/Book.css';

const Book = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-types">
      <h2>{book.genre}</h2>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <ul className="book-buttons">
        <li>
          <button type="button" className="btns">
            Comments
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btns"
            onClick={() => dispatch(removeaBook(id))}
          >
            Remove
          </button>
        </li>
        <li>
          <button type="button" className="btns">
            Edit
          </button>
        </li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  }),
  id: PropTypes.oneOf(['number', 'String']).isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
