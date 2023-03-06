import "./Movie.css"
import ErrorMessage from "../errors/ErrorMessage"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getOneMovie } from "../../api/fetch"
import { destroyMovie } from "../../api/fetch"
import { Link } from "react-router-dom"

export default function Movie() {
    const [loadingError, setLoadingError] = useState(false)
    const [movie, setMovie] = useState({})

    const { id } = useParams()
    let navigate = useNavigate()

    function handleDelete() {
        destroyMovie(id).then(() => {
            navigate("/")
        }).catch((e) => setLoadingError(true))
    }

    useEffect(() => {
        getOneMovie(id).then((res) => {
            console.log(res)
            setMovie(res)
            Object.keys(res).length === 0 ? setLoadingError(true) : setLoadingError(false)
        }).catch(() => setLoadingError(true))
    }, [id])

    return (
        <div className="movies-movie-wrapper">
            <h2>{movie.title}</h2>
            <section className="movies-movie">

                {loadingError ?
                    (<ErrorMessage />) :

                    (
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
                                <button className="delete" onClick={() => handleDelete(movie.id)}>Remove Movie</button>
                                <Link to={`/movies/${id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                            </aside>
                        </>
                    )
                }
            </section>

        </div>
    )
}