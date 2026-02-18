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

      if(jsonData.results && jsonData.results.length>0){
        setNewsData(jsonData.results.slice(0,12));
      }

    }catch(err){

      console.log("API failed → using demo data");

      // ⭐ fallback demo data (important)
      setNewsData([
        {
          title:"Demo News Working",
          summary:"If you see this, your UI works perfectly",
          url:"https://google.com",
          image_url:"https://images.unsplash.com/photo-1504711434969-e33886168f5c"
        },
        {
          title:"Second Demo News",
          summary:"This is fallback demo",
          url:"https://google.com",
          image_url:"https://images.unsplash.com/photo-1495020689067-958852a7765e"
        }
      ]);
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

      {newsData.length>0 && <Card data={newsData}/>}

    </div>
  );
};

export default Newsapp;