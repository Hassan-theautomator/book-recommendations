// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchBooks } from './services/bookService';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await fetchBooks();
        setBooks(books);
        setLoading(false);
      } catch (error) {
        setError('Error fetching books');
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Book Recommendations</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;

