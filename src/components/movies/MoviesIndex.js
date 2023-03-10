import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import MoviesListing from "./MoviesListing";
import { getAllMovies } from "../../api/fetch";
import "../shows/ShowsIndex.css"

// import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getAllMovies()
      .then((res) => {

        setMovies(res);
        // setAllMovies(res);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

  function handleTextChange(e) { 
    console.log(e.target.value)
    const title = e.target.value; 
    const result = title.length ? filterMovies(title, movies) : movies;
          setSearchTitle(title);
          setMovies(result);
  }

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  }); 
}


  return (
    <div>
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
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <br />

          <>
            {movies.map((movie) => (
              <MoviesListing key={movie.id} movie={movie} />
            ))}
          </>
        </section>
      )}
    </div>
  );
}
