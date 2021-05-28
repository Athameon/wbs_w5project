import React from 'react'
import "./index.js"



export default (props) => {
  return (
    <div className="card col-l" style={{width: '28rem'}}>
        <div className="card-body ">
          <h5 className="card-title">{props.card.title}</h5>
          <p className="card-text">{props.card.author}</p>
        </div>
    </div>
  )
}