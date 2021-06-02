import React from "react";
import "./index.js";
import "./Card.css";
import parse from 'html-react-parser';

const Card = (prop) => {
  return (
    <div className="card col-l">
      <div className="card-body ">
        <div
          onClick={() => prop.clickedStory(prop.card, prop.card.title !== null)}
            className="card-title"
        >
          {parse(prop.card.title ? prop.card.title + "" : prop.card.comment_text + "")}
        </div>
        <p className="card-text">
          {new Date(prop.card.created_at).toLocaleString()}
        </p>
        <p>
          {prop.card.points ? prop.card.points : 0} Points | {prop.card.author} |{" "}
          {prop.card.num_comments ? prop.card.num_comments : 0} comments
        </p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default Card;
