import React from "react";
import "./index.js";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card col-l">
      <div className="card-body ">
        <a href={card.url} target="_blank" rel="noreferrer" className="card-title">
          {card.title ? card.title : card.comment_text}
        </a>
        <p className="card-text">{card.author}</p>
        <p className="card-text">
          {new Date(card.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Card;
