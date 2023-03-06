import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllShows } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";
import ShowListing from "./ShowListing"


export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])
  const [allShows, setAllShows] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    getAllShows().then((res)=>{
      setShows(res)
      setAllShows(res)
      setLoadingError(false)
    }).catch((e)=>setLoadingError(true))
  }, [])

  function handleTextChange(e){
    console.log(searchTitle)
    const title = e.target.value
    const result = title.length ? filterShows(title, allShows) : allShows
    setSearchTitle(title)
    setShows(result)
  }

  function filterShows(search, shows){
    return shows.filter((show)=>{
      return show.title.toLowerCase().match(search.toLowerCase())
    })
  }

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
              value={searchTitle}
              id="searchTitle"
            onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {
              shows.map((show)=>{
                return <ShowListing show={show} key={show.id}/>
              })
            }
            {/* <!-- ShowListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}
