import React from "react";

export default function (props) {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <div className="text-content">
          <div className="title">{portfolioItem.name}</div>
          <a
            className="delete-icon"
            onClick={() => props.handleDeleteClick(portfolioItem)}
          >
            <i className="fas fa-trash-alt"></i>
          </a>
        </div>
      </div>
    );
  });
  return <div className="portfolio-sidebar-list">{portfolioList}</div>;
}
