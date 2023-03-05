import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllMedias } from "../../api/fetch";

import "./MediasIndex.css";
import MediaListing from "./MediaListing";

export default function MediasIndex() {

  const { type } = useParams();

  // Make 2 states for the error and the Medias data, that will be returned by our page load fetch below
  const [loadingError, setLoadingError] = useState(false);
  const [medias, setMedias] = useState([]);
  const [allMedias, setAllMedias] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // On page load, call getAllMedias to fetch our intial Medias data
  // We then setMedias state to the response, which will be the array of Medias
  useEffect(() => {
    getAllMedias(type).then((response) => {
      setMedias(response);
      setAllMedias(response);
      setLoadingError(false);
    }).catch((error) => {
      setLoadingError(true)
    })
    console.log("Type switch")
  }, [type])

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMedias(title, allMedias) : allMedias

    setSearchTitle(title);
    setMedias(result)
    // console.log(title, searchTitle)
  }

  function filterMedias(search, medias) {
    return medias.filter((media) => {
      return media.title.toLowerCase().match(search.toLowerCase());
    })
  }

  // If there is an error on our page load useEffect, loadingError state will be true, and therefore the code below will return our error.js component
  // If there isnt an error, the loadingError state will be false, and then the page will load
  
    return (
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <section className="medias-index-wrapper">
            <h2>All {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            <button>
              <Link to={`/${type}/new`}>Add a new {type.charAt(0).toUpperCase() + type.slice(1)}</Link>
            </button>
            <br />
            <label htmlFor="searchTitle">
              Search {type.charAt(0).toUpperCase() + type.slice(1)}:
              <input
                type="text"
                value={searchTitle}
                id="searchTitle"
                onChange={handleTextChange}
              />
            </label>
            <section className="medias-index">
              {medias.map((media) => {
                return <MediaListing media={media} key={media.id} />
              })}
            </section>
          </section>
        )}
      </div>
    );
}
