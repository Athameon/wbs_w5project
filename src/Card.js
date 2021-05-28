import React from 'react'
import "./index.js"

export default ({card}) => {
  return (
    <div className="card col-l" style={{width: '28rem'}}>
        <div className="card-body ">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.author}</p>
        </div>
    </div>
  )
}