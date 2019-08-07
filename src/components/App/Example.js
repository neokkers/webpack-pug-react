import React, { useState } from 'react';
import Example2 from './Example2';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(12);

  return (
    <div>
      <p>You clicked {count} times</p>

      <Example2 setCount={setCount} count={count} />
    </div>
  );
}
