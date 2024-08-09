import { useEffect, useState } from "react";
import Style from "./Page.module.css";
export default function Page() {
  const [query, setQuery] = useState("");
  const url = "https://api.spoonacular.com/recipes/complexsearch";
  const API_KEY = "48845d35318a4d67a1e1ecf4333e6d14";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=$(API_KEY)`); 
      const data = await res.json();
      console.log(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
