import React from "react";

export default function (props) {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <div>
          <h1 className="title">{portfolioItem.name}</h1>
          <h2>{portfolioItem.id}</h2>
        </div>
      </div>
    );
  });
  return <div className="portfolio-sidebar-list">{portfolioList}</div>;
}