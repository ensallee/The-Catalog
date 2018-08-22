import React from 'react';

const Book = (props) => {
  return (
    <div className="card">
      <img src={props.image}/>
      <h3>{props.title}</h3>
      <h4>By {props.author}</h4>
      <h6>Average Rating: {props.rating}</h6>
    </div>
  )
}

export default Book;
