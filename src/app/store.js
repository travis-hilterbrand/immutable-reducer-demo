import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { testReducer } from '../testReducer';
console.log('testReducer', testReducer);

export default configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer
  },
});
