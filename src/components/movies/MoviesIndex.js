import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";

import "../shows/ShowsIndex.css";
import "../errors/ErrorMessage.css"

import { getAllMovies } from "../../api/fetch";

export default function ShowsIndex() {
  
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
    .then((res) => {
        setMovies(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err)
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
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>

          <section className="shows-index">
            {movies.map(movie => <MovieListing {...movie} key={movie.id} />)}
          </section>
        </section>
      )}
    </div>
  );
}

