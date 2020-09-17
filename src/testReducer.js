import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  a: [],
  test: '',
};
export const testReducer = createReducer(initialState, {
  setA(state, action) {
    state.a.push(action.payload);
  },
  setTest(state, action) {
    state.test = action.payload;
  }
});