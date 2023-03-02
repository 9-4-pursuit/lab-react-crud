import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";

import "./MoviesIndex.css";
import ShowListing from "./ShowListing";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  // we want useEffect to render everything on firstload -- add setShows for the response from api to set the shows on load.
  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

  return (
    <div>
      {/* use the state variable to throw the error from your hook*/}
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
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
          <section className="movies-index">
            {movies.map((movie) =>{
              return <ShowListing movie={movie} key={movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
