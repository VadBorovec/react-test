import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// * using createReducer
// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment(100));
// console.log(increment.toString());

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// * using createSlice
const mySlice = createSlice({
  name: 'myValueSlice',
  initialState: 15,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
    incrementByAmount(state, action) {
      return (state += action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = mySlice.actions;

// * using createReducer
export const add = createAction('items/add');
export const remove = createAction('items/remove');

console.log(increment(100));
console.log(increment.toString());

const itemsReducer = createReducer([], {
  [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action) => state.filter(item => item.id !== action.payload),
});

export const store = configureStore({
  reducer: {
    // myValue: myReducer,
    myValueSlice: mySlice.reducer,
    items: itemsReducer,
  },
});
