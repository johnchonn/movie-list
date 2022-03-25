import React from 'react';
import MovieItem from './MovieItem.jsx';


const MovieList = ({movieData}) => {
  if (movieData.length === 0) {
    return <div>No matches found</div>
  }
  return (
    <div>
      <ul>
      {movieData.map((movie, index) => {
        return <MovieItem key={index} title={movie.title} />
      })}
      </ul>
    </div>
  )
}


export default MovieList;