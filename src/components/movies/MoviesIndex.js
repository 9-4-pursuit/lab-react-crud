import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ErrorMessage from '../errors/ErrorMessage';
import MovieListing from './MovieListing';
import { getMovies } from '../../api/fetch';
//import '../shows/ShowsIndex.css';

export default function MoviesIndex() {

  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [allMovies, setAllMovies] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getMovies()
    .then((response) => {

      setMovies(response)
      setLoadingError(false)
      setAllMovies(response)
    })
    .catch((error) => {
      console.log(error)
      setLoadingError(true)
    })
  }, [])

  function handleTextChange(event) {

    let title = event.target.value;
    let result = title.length ? filterItems(title, allMovies) : allMovies
    setSearchTitle(title);
    setMovies(result);
  }

  function filterItems(search, movies) {

    return movies.filter((movie) => {

      return movie.title.toLowerCase().match(search.toLowerCase())
    })
  }

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <div className="shows-index-wrapper">
          <h2> All Movies </h2>
          <button>
            <NavLink to="/shows/new"> Add a new movie </NavLink>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input type='text' value={searchTitle} id='searchTitle' onChange={handleTextChange} />
          </label>
          <div className="shows-index">
            {movies.map((movie) => {

              return <MovieListing movie={movie} key={movie.id} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}
