import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {

  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  // ✅ NEW API (GNews working on Netlify)
  const getData = async () => {
    try {

      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${search}&lang=en&token=9c8e3c3d3e7a4e2b9f2c6d5f`
      );

      const jsonData = await response.json();

      setNewsData(jsonData.articles?.slice(0,10) || []);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>

      <nav style={{display:"flex",justifyContent:"space-between",padding:"15px"}}>
        <h1>Trendy News</h1>

        <div style={{display:"flex",gap:"10px"}}>
          <button>All News</button>
          <button>Trending</button>
        </div>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <p className="head">Stay Update with TrendyNews</p>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      {newsData.length > 0 && <Card data={newsData}/>}

    </div>
  );
};

export default Newsapp;