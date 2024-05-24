// src/components/Book.js
import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}</p>
      <p>First Published: {book.first_publish_year}</p>
    </div>
  );
};

export default Book;
