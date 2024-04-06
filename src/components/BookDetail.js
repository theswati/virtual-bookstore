// components/BookDetail.js
import React from 'react';
import './BookDetail.css';

function BookDetail({ book, onClose }) {
  return (
    <div className="book-detail">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <div className="details">
        <h2>{book.volumeInfo.title}</h2>
        <p>Author(s): {book.volumeInfo.authors.join(', ')}</p>
        <p>Publisher: {book.volumeInfo.publisher}</p>
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
        <p>Description: {book.volumeInfo.description}</p>
        <div className="buttons">
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
