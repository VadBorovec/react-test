import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

const entities = createReducer([], {
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBooks.rejected]: (_, action) => action.payload,
  [fetchBooks.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});

// !============createSlice
// *🔥 ИСПОЛЬЗУЕТ IMMER ДЛЯ МУТАЦИИ КОПИИ СОСТОЯНИЯ
// const booksSlice = createSlice({
//   name: 'books',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchBooks.fulfilled]: (state, { payload }) => (state.entities = payload),
//     [fetchBooks.pending]: state => (state.isLoading = true),
//   },
// });

// export default booksSlice.reducer;

// !============dont need when use createAsyncThunk()
// import * as booksActions from './booksActions';

// const entities = createReducer([], {
//   [booksActions.fetchBooksSuccess]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [booksActions.fetchBooksRequest]: () => true,
//   [booksActions.fetchBooksSuccess]: () => false,
//   [booksActions.fetchBooksError]: () => false,
// });

// const error = createReducer(null, {
//   [booksActions.fetchBooksError]: (_, action) => action.payload,
//   [booksActions.fetchBooksRequest]: () => null,
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });
