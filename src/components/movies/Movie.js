import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";

import { requestData } from "../../api/fetch";

import "../shows/Show.css";

function Movie() {
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete(id) {
    requestData('DELETE', 'movies', id)
    .then(() => navigate("/movies"))
    .catch((err) => {
     console.log(err)
     setLoadingError(true)
    })
  }

  useEffect(() => {
   requestData('GET', 'movies', id)
   .then((res) => {
    setMovie(res);
    if(Object.keys(res).length === 0) setLoadingError(true);
    else setLoadingError(false);
   })
   .catch((err) => {
    console.log(err);
    setLoadingError(true);
   });
  }, [id])

  return (
    <section className="shows-show-wrapper">
      <h2>{movie.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Movie;
