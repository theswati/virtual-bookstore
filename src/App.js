// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchInitialBooks = async () => {
      try {
        const response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes');
        const data = [...response1.data.items, ...response2.data.items];
        setBooks(data);
      } catch (error) {
        console.error('Error fetching initial book data:', error);
      }
    };

    fetchInitialBooks();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetail = () => {
    setSelectedBook(null);
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="left-header">
          <h1>Virtual Bookstore</h1>
        </div>
        <div className="middle-header">
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>
      <div className="main-content">
        <BookList books={books} onBookClick={handleBookClick} />
        {selectedBook && <BookDetail book={selectedBook} onClose={handleCloseDetail} />}
      </div>
    </div>
  );
}

export default App;
