import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {

  const [newsData, setNewsData] = useState([]);

  const getData = async () => {

    try{

      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );

      const jsonData = await response.json();

      setNewsData(jsonData.results?.slice(0,12) || []);

    }catch(err){
      console.log(err);
    }

  };

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div>

      <nav style={{display:"flex",justifyContent:"space-between",padding:"15px"}}>
        <h1>Trendy News</h1>
      </nav>

      <p className="head">Stay Update with TrendyNews</p>

      {newsData.length > 0 && <Card data={newsData}/>}

    </div>
  );
};

export default Newsapp;