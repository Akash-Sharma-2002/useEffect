import { useEffect, useState } from "react";
import React from "react";

const Search = () => {
  const [query, setQuery] = useState("pizza");
  const [dataResults, setDataResults] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey=4e4d8eb7f684412f8c229b67175ecb63"
      );
      const data = await res.json();
      setDataResults(data.results);
      console.log(res);
    }
    fetchData();
  }, [query]);
  console.log(dataResults);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {dataResults.map((item, index) => {
        return (
          <div>
            <h1 key={index}>{item.id}</h1>
            <h2 key={index}>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
