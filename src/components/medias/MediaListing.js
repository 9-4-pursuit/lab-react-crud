import {Link, useParams } from 'react-router-dom'
import "./MediaListing.css";

export default function MediaListing({ media }) {

  const {type} = useParams();

  return (
    <article className="media">
      <h3 className="title">
        <Link to={`/${type}/${media.id}`}>{media.title}</Link>
      </h3>
      <p className="description">{media.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {media.listedIn}
        </p>
        <p>
          <span>Duration:</span> {media.duration}
        </p>
      </aside>
    </article>
  );
}
