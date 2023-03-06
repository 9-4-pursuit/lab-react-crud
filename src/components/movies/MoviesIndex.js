import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";
import "./MoviesIndex.css";
import MoviesListing from "./MoviesListing";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setAllMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

  function handleTextChange(event) {
    const title = event.target.value
    const result = title.length ? filterMovies(title, allMovies) : allMovies;

    setSearchTitle(title)
    setMovies(result)
  }

  function filterMovies (title, allMovies) {
    return allMovies.filter((movie) => {
      return movie.title.toLowerCase().match(title.toLowerCase())
    })
  }

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/movies/new">Add a new show</Link>
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
          <section className="movies-index">
            {movies.map((movie) => {
              return (
                <>
                  <MoviesListing movie={movie} key={movie.id}/>
                </>
              );
            })}
          </section>
        </section>
      )}
    </div>
  );
}
