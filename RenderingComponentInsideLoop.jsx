//Cars.jsx
export default function Cars({ name }) {
  return <div>{name}</div>;
}


//Fruits.jsx

import Cars from "./Cars";
export default function Fruits() {
  const fruits = [
    { name: "apple", price: 200, emoji: "🍎" },
    { name: "banana", price: 300, emoji: "🍌" },
    { name: "pineapple", price: 400, emoji: "🍍" },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Cars name={fruit.name} />
        ))}
      </ul>
    </div>
  );
}

//App.jsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

function App() {
  return (
    <div className="App">
      <Fruits />
    </div>
  );
}

export default App;
