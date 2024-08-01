//Fruits.jsx

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
          <li key={fruit.name}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}


//App.jsx

function App() {
  return (
    <div className="App">
      <Fruits />
    </div>
  );
}

export default App;
