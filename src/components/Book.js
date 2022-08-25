import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book }) => (
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
        <button type="button" className="btns">
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

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {
    id: 1,
    title: '48 Laws of Power',
    author: 'Robert Greene',
    genre: 'Non-Fiction',
  },
};

export default Book;
