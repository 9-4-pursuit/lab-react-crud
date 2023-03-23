import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ErrorMessage from '../errors/ErrorMessage'
import './MoviesIndex.css'
import { getAllMovies } from '../../api/fetch'
import MovieListing from './MovieListing'


export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getAllMovies()
      .then(res => {
        setMovies(res)
        setLoadingError(false)
      })
      .catch(err => setLoadingError(true))
  }, [])
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className='movies-index-wrapper'>
          <h2>All Movies</h2>
          <button>
            <Link to='/movies/new'>Add a new movie</Link>
          </button>
          <br />
          <label htmlFor='searchTitle'>
            Search Movies:
            <input
              type='text'
              // value={searchTitle}
              id='searchTitle'
              // onChange={handleTextChange}
            />
          </label>
          <section className='movies-index'>
            {movies.map(movie=> (
              <MovieListing key={movie.id} movie={movie} />
            ))}
          </section>
        </section>
      )}
    </div>
  )
}


