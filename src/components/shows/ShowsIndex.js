import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";

import "./ShowsIndex.css";
import ShowListing from "./ShowListing";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  // we want useEffect to render everything on firstload -- add setShows for the response from api to set the shows on load.
  useEffect(() => {
    getAllShows()
      .then((response) => {
        setShows(response);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

  return (
    <div>
      {/* use the state variable to throw the error from your hook*/}
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
            {shows.map((show) =>{
              return <ShowListing show={show} key={show.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
