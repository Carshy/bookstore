import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addaBook } from '../redux/books/books';
import '../styles/AddaBook.css';

function AddaBook() {
  // Setting data inputs in the local React state
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  // sending post requests for the title
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // sending post requests for the author
  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4;
    dispatch(addaBook(id, title, author));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="add-book-section">
        <h2>ADD NEW BOOK</h2>
        <input type="text" onChange={onTitleChange} className="input-book" name="title" value={title} placeholder="Book title" />
        <input
          type="text"
          onChange={onAuthorChange}
          className="input-category"
          name="author"
          value={author}
          placeholder="Author"
        />
        <button type="submit" className="add-button">
          Add New
        </button>
      </form>
    </div>
  );
}

export default AddaBook;
