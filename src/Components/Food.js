import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Food = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(""); // Trigger search only when button clicked
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("Search and Get Recipe's");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    setQuery(search);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") {
        setMsg("Please Enter Something");
        setData(null);
        return;
      }

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const jsonData = await response.json();
        if (jsonData.meals) {
          setData(jsonData.meals);
          setMsg("Your Search Results:");
        } else {
          setData(null);
          setMsg("No meals found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMsg("Something went wrong.");
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <h1 className="head">FOOD RECIPE APP</h1>
      <div className="container">
        <div className="searchBar">
          <input
            placeholder="Search Meals"
            type="text"
            value={search}
            onChange={handleInput}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h2 className="msg">{msg}</h2>
        <div>
          <Cards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Food;
