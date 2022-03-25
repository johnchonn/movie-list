import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem.jsx';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query);
  }

  useEffect(() => {
    // console.log(filterMovies());
    setMovies(filterMovies());
  }, [query])

  const getData = (cb) => {
    fetch('http://localhost:3000/api/movies')
    .then((response) => {
      return response.json();

    }).then((data) => {
      cb(data);
    });
  }

  const handleSearch = (value) => {
    axios.get('http://localhost:3000/api/search', {
      searchValue: value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  useEffect(() => {
    getData((data) => {setMovies(data)});
  }, []);


  const filterMovies = () => {
    if (query.length > 0) {
      return movies.filter((movie) => {
          return movie.title.toLowerCase().includes(query);
      });
    } else {
      return movies;
    }
    // return movies;
  }

  return (
    <div>
      <SearchBar updateQuery={updateQuery} handleSearch={handleSearch}/>
      <MovieList movieData={movies} />
    </div>
  )
}

export default App;
