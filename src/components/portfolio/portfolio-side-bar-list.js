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
          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(portfolioItem)}
            >
              <i className="far fa-edit"></i>
            </a>
            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(portfolioItem)}
            >
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div className="portfolio-sidebar-list">{portfolioList}</div>;
}
