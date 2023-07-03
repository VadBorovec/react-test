import { configureStore } from '@reduxjs/toolkit';
// import { mySlice } from './myValue/myValue';
import { userSlice } from './userSlice';

//  * STORE
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // myValue: mySlice.reducer,
    // myValue: myReducer,
    // items: itemsReducer,
    // items: itemsSlice,
  },
});
