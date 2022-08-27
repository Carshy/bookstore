import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
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
    const newBook = {
      item_id: uuidv4(),
      author,
      title,
      category: document.getElementById('book-category').value,
    };
    dispatch(addaBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="add-book-section">
        <h2>ADD NEW BOOK</h2>
        <input type="text" onChange={onTitleChange} className="input-book" name="title" value={title} placeholder="Book title" />
        <input
          type="text"
          onChange={onAuthorChange}
          className="input-author"
          name="author"
          value={author}
          placeholder="Author"
        />

        <select name="books" id="book-category">
          <option value="Categories">Categories</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Historical">Historical</option>
          <option value="Kids">Kids</option>
          <option value="Thriller">Thriller</option>
        </select>

        <button type="submit" className="add-button">
          Add New
        </button>
      </form>
    </div>
  );
}

export default AddaBook;
