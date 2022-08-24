import React from 'react';
import '../styles/AddaBook.css';

function AddaBook() {
  return (
    <div>
      <form className="add-book-section">
        <h2>ADD NEW BOOK</h2>
        <input type="text" className="input-book" placeholder="Book title" />
        <input
          type="dropdown"
          className="input-category"
          placeholder="Author"
        />
        <button type="button" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddaBook;
