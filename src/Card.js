import React from 'react'
import "./index.js"

export default ({card}) => {
  return (
    <div className="card col-l" style={{width: '28rem'}}>
        <div className="card-body ">
          <h5 className="card-title">{card.title? card.title : card.comment_text}</h5>
          <p className="card-text">{card.author}</p>
          <p className="card-text">{new Date(card.created_at).toLocaleString()}</p>
        </div>
    </div>
  )
}