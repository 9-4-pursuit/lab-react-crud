import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";

import { filterItems, requestData } from "../../api/fetch";

import "../shows/ShowsIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const handleTextChange = (e) => {
    const title = e.target.value;
    const result = title.length ? filterItems(title, allMovies) : allMovies;
    setSearchTitle(title);
    setMovies(result)
  }

  useEffect(() => {
    requestData('GET', 'movies')
      .then((response) => {
        setAllMovies(response)
        setMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error)
        setLoadingError(true);
      });
  }, []);


  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/shows/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>

          <section className="shows-index">
            {movies.map((movie) => {
              return <MovieListing {...movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

