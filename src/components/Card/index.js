import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggleInfo: false
    }
  }
  
  toggleInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo});
  }
  return (
    <article className="Card">
      <img src={image} />
      <h2>{title}</h2>
      <p>{rating}</p>
    </article>
  )
}