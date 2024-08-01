import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // State

  function buttonClick() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter value is:{count} </h1>
      <button onClick={buttonClick}>Increment</button>
      <button onClick={decreaseCount}>Increment</button>
    </div>
  );
}
