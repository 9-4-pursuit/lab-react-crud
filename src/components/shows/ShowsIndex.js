import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";

import "./ShowsIndex.css";
import ShowListing from "./ShowListing";

export default function ShowsIndex() {

  // Make 2 states for the error and the shows data, that will be returned by our page load fetch below
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);

  // On page load, call getAllShows to fetch our intial shows data
  // We then setShows state to the response, which will be the array of shows
  useEffect(() => {
    getAllShows().then((response) => {
      setShows(response)
      setLoadingError(false)
    }).catch((error) => {
      setLoadingError(true)
    })
  }, [])

// If there is an error on our page load useEffect, loadingError state will be true, and therefore the code below will return our error.js component
// If there isnt an error, the loadingError state will be false, and then the page will load
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
            // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}
