// components/BookList.js
import React from 'react';
import './BookList.css';

function BookList({ books, onBookClick }) {
  return (
    <div className="book-list">
      <h2>Featured Books</h2>
      <div className="grid-container">
        {books.map((book) => (
          <div key={book.id} className="book-item" onClick={() => onBookClick(book)}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <div className="book-info">
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
