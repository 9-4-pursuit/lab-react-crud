import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import ErrorMessage from '../errors/ErrorMessage';
import { getMovie, destroyMovie } from '../../api/fetch';
import '../shows/Show.css';

export default function Movie() {

    const [movie, setMovie] = useState(null);
    const [loadingError, setLoadingError] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    function handleDelete() {

        destroyMovie(id)
        .then(() => {
            navigate('/movies')
        }).catch((error) => {
            console.log(error)
            setLoadingError(true)
        })
    }

    useEffect(() => {

        getMovie(id)
        .then((response) => {

            setMovie(response)

            if (Object.keys(response).length === 0) {

                setLoadingError(true)
            }

            else {
                setLoadingError(false)
            }
        }).catch((error) => {
            
            console.log(error)
            setLoadingError(true)
        })
    }, [id])

    return (
        <div className="shows-show-wrapper">
            <h2> {movie.title} </h2>
            <div className="shows-show">
                {loadingError ? (
                    <ErrorMessage />
                ) : (
                    <>
                    <aside>
                        <p>
                            <span> Duration: </span> {movie.duration}
                        </p>
                        <p>
                            <span> Listed Categories: </span> {movie.listedIn}
                        </p>
                        <p>
                            <span> Country: </span> {movie.country}
                        </p>
                        <p>
                            <span> Rating: </span> {movie.rating}
                        </p>
                        <p>
                            <span> Date Added: </span> {movie.dateAdded}
                        </p>
                    </aside>
                    <article>
                        <p> {movie.description} </p>
                    </article>
                    <aside>
                        <button className="delete" onClick={() => handleDelete(movie.id)}> Remove. </button>
                        <NavLink to={`/movies/${id}/edit`}>
                            <button> Edit </button>
                        </NavLink>
                    </aside>
                    </>
                )}
            </div>
        </div>
    )
}