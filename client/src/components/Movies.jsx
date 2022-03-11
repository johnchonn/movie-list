import React from 'react';
import Movie from './Movie.jsx';

const Movies = ({ movies, setWatched }) => {
  if (movies.length === 0) {
    return <div>no matches found</div>
  }

  return (
  <ul>
    {movies.map(movie => (
    <Movie
    setWatched={setWatched}
      key={movie.id}
      movie={movie}
    />))}
  </ul>
  )
};

export default Movies;