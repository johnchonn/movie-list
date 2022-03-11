import React, { Component } from 'react';
import Movies from './Movies.jsx';
import movies from './MovieListData.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      query: null,
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.setWatched = this.setWatched.bind(this);
  };

  addMovie(movie) {
    const movie = {title};
    const id = this.state.movies.length + 1;
    movie.id = id;
    movie.watched = false;
    const movies = this.state.movies.slice(0);
    movies.push(movie)
    this.setState({movies});
  }

  componentDidMount() {
    this.setState({movies: [
      {title: 'elf', watched: true, id: 1},
      {title: 'Batman', watched: false, id: 3}
      ]
    })
  }

  setWatched(id) {
    for (let i = 0; i < this.state.movies.length; i++) {
      const currentMovie = this.state.movies[i];
      if (currentMovie.id === id) {
        currentMovie.watched = !currentMovie.watched;
        const movies = this.state.movies.slice(0);
        movies[i] = currentMovie;
        this.setState({movies});
      }
    }
  }

  updateQuery(query) {
    this.setState({query});
  }

filterMovies() {
  const { query, movies } = this.state;
  if (query) {
    return movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      return false;
    })
  }
  return movies;
}

  render() {
    const { movies } = this.state;
    return (
    <div>
      <h1>Movie List</h1>
      <AddMovie add={this.addMovie} />
      <SearchBar updateQuery={this.updateQuery}/>
      <Movies setWatched={this.setWatched} movies={this.filterMovies(movies)} />
    </div>
    )
  }
}

export default App;