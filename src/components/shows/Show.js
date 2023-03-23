import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { destroyShow, getOneShow } from '../../api/fetch'
import './Show.css'

import ErrorMessage from '../errors/ErrorMessage'

function Show() {
  const navigate = useNavigate()
  const [show, setShow] = useState({})
  const [loadingError, setLoadingError] = useState(false)
  const { id } = useParams()
  const handleDelete = () => {
    destroyShow(id)
      .then(res => navigate('/shows'))
      .catch(err => {
        console.log(err)
        setLoadingError(true)
      })
  }

  useEffect(() => {
    getOneShow(id)
      .then(res => setShow(res))
      .catch(err => {
        setLoadingError(true)
      })
  },[id])

  return (
    <section className='shows-show-wrapper'>
      <h2>{show.title}</h2>
      <section className='shows-show'>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>{show.description}</p>
            </article>
            <aside>
              <button className='delete' onClick={() => handleDelete(show.id)}>
                Remove show
              </button>
              <Link to={`/shows/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  )
}

export default Show
