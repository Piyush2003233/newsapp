import React from "react";

const Card = ({ data }) => {

  return (
    <div className="cardContainer">

      {data.map((curItem, index) => {

        if (!curItem.image_url) return null;

        return (
          <div className="card" key={index}>

            <img src={curItem.image_url} alt="news"/>

            <div className="content">

              <a
                className="title"
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {curItem.title}
              </a>

              <p>{curItem.summary}</p>

              <button onClick={() => window.open(curItem.url,"_blank")}>
                Read More
              </button>

            </div>

          </div>
        );

      })}

    </div>
  );

};

export default Card;