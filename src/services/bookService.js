// src/services/bookService.js
import axios from 'axios';

const API_URL = 'https://openlibrary.org/subjects/love.json?published_in=2000';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.works;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
