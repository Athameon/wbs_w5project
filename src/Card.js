import React from "react";
import "./index.js";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card col-l" style={{ width: "50%" }}>
      <div className="card-body ">
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer"
          className="card-title"
        >
          {card.title ? card.title : card.comment_text}
        </a>
        <p className="card-text">
          {new Date(card.created_at).toLocaleString()}
        </p>
        <p>
          {card.points ? card.points : 0} Points | {card.author} |{" "}
          {card.num_comments ? card.num_comments : 0} comments
        </p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default Card;
