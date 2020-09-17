import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  a: [],
  test: '',
};
export const actions = {
  setA: createAction('setA'),
  setTest: createAction('setTest'),
};

const reducers = {
  [actions.setA]: (state, action) => {
    state.a.push(action.payload);
  },
  [actions.setTest]: (state, action) => {
    state.test = action.payload;
  },
};
export const testReducer = createReducer(initialState, reducers);

export const selectA = state => state.test.a;

