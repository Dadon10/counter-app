import React, { useState } from 'react';
import './App.css';

function App() {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Handlers for increment, decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-display">Count: {count}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
