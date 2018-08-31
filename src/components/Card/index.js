import React, { Component } from 'react';
import { addUserFavorite, removeUserFavorite } from '../../Utilities/fetchApi';
import { removeFavorite, addFavorite} from '../../actions';

import './Card.css';
import { connect } from 'react-redux';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggleInfo: false,
      favorite: false
    }
  }
  
  toggleInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo});
  }

  toggleFavorite = () => {
    const { user, movie, history, favorites, addFavoriteToStore, removeFavoriteFromStore } = this.props;
    const userFavorites = favorites.map(fav => fav.movie_id);
    if (!user.name) {
      history.push('/signup')
      console.log('Sign up to add a favorite!')
      return
    }
    if (userFavorites.includes(movie.movie_id)) {
      removeFavoriteFromStore(movie.movie_id);
      removeUserFavorite(user.id, movie.movie_id);
    } else {
      addFavoriteToStore(movie);
      addUserFavorite(user.id, movie);
    }
    this.setState({favorite: !this.state.favorite})
  }

  render() {
    const { title, poster_path, vote_average, overview, release_date } = this.props.movie;
    const { toggleInfo, favorite } = this.state;
    return (
      <article className={`Card  ${toggleInfo ? "show" : "hide"}`} onClick={this.toggleInfo}>
        <div className="description">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
        <img src={poster_path} />
        <h1>{title}</h1>
        <button onClick={this.toggleFavorite}>{favorite ? '★' : '☆'}</button>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  addFavoriteToStore: (movie) => dispatch(addFavorite(movie)),
  removeFavoriteFromStore: (movieId) => dispatch(removeFavorite(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)

