import React, { useState } from "react";

function List() {
  const numbers = [1, 2, 3, 4, 5];

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h5>List</h5>
      {isVisible && (
        <ul>
          {numbers.map((n) => (
            <li key={n}>Número {n}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default List;
