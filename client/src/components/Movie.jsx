import React from 'react';

const Movie = ({ movie, setWatched }) => {
  if (movie.watched) {
    return (<li>
    {movie.title}
    <button> onClick={() => {setWatched(movie.id)}}>Watched</button>
      </li>)
  } else {
    return (<li>
      {movie.title}
      <button> onClick={() => {setWatched(movie.id)}}>To Watch</button>
        </li>)
  }
}

export default Movie;