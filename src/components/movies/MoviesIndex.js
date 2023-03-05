import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import "./MoviesIndex.css"
import MovieListing from "./MovieListing";



export default function MoviesIndex() {

  const [loadingError, setLoadingError] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies().then((response) => {
      setMovies(response)
      setLoadingError(false)
    }).catch((error) => {
      setLoadingError(true)
    })
  },[])



  return (

    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All movies</h2>
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

            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
    
  )

  


}
