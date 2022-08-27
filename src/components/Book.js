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

      <div className="left-side">
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

      <div className="middle-section">

        <div className="circle-wrapper">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>

        <div className="set-percentages">
          <h2>87%</h2>
          <p className="blur">Completed</p>
        </div>
      </div>

      <div className="book-right-section">
        <h3 className="currentchapter blur">CURRENT CHAPTER</h3>
        <h4 className="chapter">Chapter 6</h4>
        <button type="button" className="bookbtn">UPDATE PRGRESS</button>
      </div>

    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
