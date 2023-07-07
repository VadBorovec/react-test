import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from '../../services/bookshelf-api';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async (bookId, { rejectWithValue }) => {
    try {
      const book = await bookShelfAPI.fetchBookById(bookId);
      return book;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// dispatchEvent(fetchBookById(bookId));
// dispatchEvent(fetchBookById(1));

// !==========dont need when use createAsyncThunk()
// import * as booksActions from './booksActions';

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());

//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };
