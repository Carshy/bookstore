import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeaBook } from '../redux/books/books';
import '../styles/Book.css';

const Book = (props) => {
  const { book } = props;
  const {
    category, title, author,
  } = book;

  const dispatch = useDispatch();

  return (
    <div className="book-types">
      <h2>{category}</h2>
      <h3>{title}</h3>
      <p>{author}</p>
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
            onClick={() => dispatch(removeaBook(book.id))}
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
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
