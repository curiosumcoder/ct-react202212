import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={{ border: '2px gray solid', padding: '1em' }}>
        <h6>Micro Frontend #1</h6>
        <h5>Counter</h5>
        <p>Counter: {counter}</p>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{ fontSize: 'xx-large', backgroundColor: 'lightcoral' }}
        >
          Count
        </button>
      </div>
    </>
  );
}

export default Counter;
