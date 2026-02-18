import React from "react";

const Card = ({ data }) => {

  return (
    <div className="cardContainer">

      {data.map((item, index) => {

        const image = item.image_url;

        if(!image) return null;

        return (

          <div className="card" key={index}>

            <img src={image} alt="news"/>

            <div className="content">

              <a
                className="title"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>

              <p>{item.summary}</p>

              <button onClick={()=>window.open(item.url,"_blank")}>
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