import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMedia, destroyMedia } from "../../api/fetch";

import "./Media.css";

import ErrorMessage from "../errors/ErrorMessage";

function Media() {
  const [media, setMedia] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { type, id } = useParams();
  let navigate = useNavigate();

  function handleDelete(type, id){
    destroyMedia(type, id).then(() => navigate(`/${type}`)).catch((error) => {
      console.log(error);
      setLoadingError(true);
    })
  }

  useEffect(() => {
    console.log(type, id);
    getOneMedia(type, id).then((response) => {
      setMedia(response)
      if (Object.keys(response).length === 0) {
        setLoadingError(true);
      } else {
        setLoadingError(false);
      }
    }).catch((error) => setLoadingError(true))
  }, [type])

  return (
    <section className="medias-media-wrapper">
      <h2>{media.title}</h2>
      <section className="medias-media">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {media.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {media.listedIn}
              </p>
              <p>
                <span>Country:</span> {media.country}
              </p>
              <p>
                <span>Rating:</span> {media.rating}
              </p>
              <p>
                <span>Date Added:</span> {media.dateAdded}
              </p>
            </aside>
            <article>
              <p>{media.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(type, media.id)}>
                Remove media
              </button>
              <Link to={`/${type}/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Media;
