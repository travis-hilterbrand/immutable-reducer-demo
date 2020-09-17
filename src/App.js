import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Counter } from './features/counter/Counter';
import { actions, selectA } from './testReducer';

let count = 0;

function App() {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(actions.setA(count++));
  };

  const a = useSelector(selectA);
  return (
    <div className="App">
      <Counter />
      <br />
      <div>
        <h3>Test slice</h3>
        <div>Array: [{a.join(',')}]</div>
        <button onClick={handleButtonClick}>Click</button>
      </div>
    </div>
  );
}

export default App;
