import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addFavoriteFetch, removeFavoriteFetch } from '../../Utilities/fetchApi';
import { removeFavorite, addFavorite } from '../../actions';
import './Card.css';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggleInfo: false,
      favorite: false
    };
  }

  componentDidMount() {
    const { favorites, movie } = this.props;
    const userFavorites = favorites.map(fav => fav.movie_id);
    if (userFavorites.includes(movie.movie_id)) {
      this.setState({ favorite: !this.state.favorite });
    }
  }
  
  toggleInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo});
  }

  toggleFavorite = (e) => {
    e.stopPropagation();
    const { user, movie, history, favorites, addFavoriteToStore, removeFavoriteFromStore } = this.props;
    const userFavorites = favorites.map(fav => fav.movie_id);
    if (!user.name) {
      return history.push('/signup');
    }
    if (userFavorites.includes(movie.movie_id)) {
      removeFavoriteFromStore(movie.movie_id);
      removeFavoriteFetch(user.id, movie.movie_id);
    } else {
      addFavoriteToStore(movie);
      addFavoriteFetch({ user_id: user.id, ...movie });
    }
    this.setState({favorite: !this.state.favorite});
  }

  render() {
    const { title, poster_path, overview } = this.props.movie;
    const { toggleInfo, favorite } = this.state;
    return (
      <article className={`Card  ${toggleInfo ? "show" : "hide"}`} onClick={this.toggleInfo}>
        <div className="description">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
        <img src={poster_path} />
        <h1>{title}</h1>
        <button 
          onClick={this.toggleFavorite}
          className={favorite ? 'after-star' : 'before-star'}
        ></button>
      </article>
    );
  }
}

export const mapStateToProps = ({ user, favorites }) => ({ user, favorites });

export const mapDispatchToProps = (dispatch) => ({
  addFavoriteToStore: (movie) => dispatch(addFavorite(movie)),
  removeFavoriteFromStore: (movieId) => dispatch(removeFavorite(movieId))
});

const { object, func, array } = PropTypes;
Card.propTypes = {
  user: object,
  movie: object,
  history: object,
  favorites: array,
  addFavoriteToStore: func,
  removeFavoriteFromStore: func
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

