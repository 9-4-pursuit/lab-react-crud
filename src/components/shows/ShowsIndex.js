import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";

import "./ShowsIndex.css";
import ShowListing from "./ShowListing";

export default function ShowsIndex() {

  const { type } = useParams();

  // Make 2 states for the error and the shows data, that will be returned by our page load fetch below
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // On page load, call getAllShows to fetch our intial shows data
  // We then setShows state to the response, which will be the array of shows
  useEffect(() => {
    getAllShows(type).then((response) => {
      setShows(response);
      setAllShows(response);
      setLoadingError(false);
    }).catch((error) => {
      setLoadingError(true)
    })
    console.log("Type switch")
  }, [type])

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title, allShows) : allShows

    setSearchTitle(title);
    setShows(result)
    // console.log(title, searchTitle)
  }

  function filterShows(search, shows) {
    return shows.filter((show) => {
      return show.title.toLowerCase().match(search.toLowerCase());
    })
  }

  // If there is an error on our page load useEffect, loadingError state will be true, and therefore the code below will return our error.js component
  // If there isnt an error, the loadingError state will be false, and then the page will load
  
  if (type === "shows") {
    return (
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <section className="shows-index-wrapper">
            <h2>All Shows</h2>
            <button>
              <Link to={`/${type}/new`}>Add a new show</Link>
            </button>
            <br />
            <label htmlFor="searchTitle">
              Search Shows:
              <input
                type="text"
                value={searchTitle}
                id="searchTitle"
                onChange={handleTextChange}
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
  } else if (type === "movies"){
    return (
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <section className="shows-index-wrapper">
            <h2>All Movies</h2>
            <button>
              <Link to={`/${type}/new`}>Add a new movie</Link>
            </button>
            <br />
            <label htmlFor="searchTitle">
              Search Movies:
              <input
                type="text"
                value={searchTitle}
                id="searchTitle"
                onChange={handleTextChange}
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
}
