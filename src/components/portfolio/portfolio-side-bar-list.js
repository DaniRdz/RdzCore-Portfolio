import React from "react";

export default function (props) {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div>
        <h1>{portfolioItem.name}</h1>
        <h1>{portfolioItem.id}</h1>
      </div>
    );
  });
  return <div className="portfolio-sidebar-list">{portfolioList}</div>;
}
