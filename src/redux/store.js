import { configureStore, Tuple } from '@reduxjs/toolkit'
 

const initialState = {
  contacts: [],
  filter: '',
};


const rootReducer = (state = initialState) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
