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
        <div className="description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={image} />
        <h1>{title}</h1>
      </article>
    )
  }
}

export default Card;