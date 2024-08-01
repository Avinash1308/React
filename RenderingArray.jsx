//Fruits.jsx


export default function Fruits() {
  const fruits = ["apple", "banana", "pineapple"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
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
