import React from 'react';

import './Card.css';

export const Card = ({title, image, rating}) => {
  return (
    <article className="Card">
      <img src={image} />
      <h2>{title}</h2>
      <p>{rating}</p>
    </article>
  )
}