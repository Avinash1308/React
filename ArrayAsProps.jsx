//Hello.jsx


function Hello({ name, message, emoji, seat }) {
  return (
    <div>
      <h1>
        {message} {name} {emoji} {seat}
      </h1>
      <button type="submit">Submit</button>
    </div>
  );
}
export default Hello;



//App.jsx


import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const seat = [1, 2, 3, 4];
  return (
    <div className="App">
      <Hello name="Avinash" message="Hello Mr/Mrs." emoji="🙋‍♂️" seat={seat} />
    </div>
  );
}

export default App;
