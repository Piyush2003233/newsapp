import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {

  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  const getData = async (query = "india") => {

    try {

      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?search=${query}`
      );

      const jsonData = await response.json();

      setNewsData(jsonData.results || []);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(search);
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const searchNow = () => {
    getData(search);
  };

  const userInput = (e) => {
    const val = e.target.value;
    setSearch(val);
    getData(val);
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
          <button onClick={searchNow}>Search</button>
        </div>
      </nav>

      <p className="head">Stay Update with TrendyNews</p>

      <div className="categoryBtn">
        <button onClick={userInput} value="space">Space</button>
        <button onClick={userInput} value="nasa">NASA</button>
        <button onClick={userInput} value="mars">Mars</button>
        <button onClick={userInput} value="rocket">Rocket</button>
        <button onClick={userInput} value="satellite">Satellite</button>
      </div>

      {newsData.length > 0 && <Card data={newsData}/>}

    </div>
  );
};

export default Newsapp; 