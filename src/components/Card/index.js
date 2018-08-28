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

  render() {
    const { title, image, rating, description, releaseDate } = this.props;
    const { toggleInfo } = this.state;
  return (
      <article className={`Card  ${toggleInfo ? "show" : "hide"}`} onClick={this.toggleInfo}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{rating}</p>
    </article>
  )
}