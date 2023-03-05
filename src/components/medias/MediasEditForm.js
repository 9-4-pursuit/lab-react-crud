import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateMedia, getOneMedia } from "../../api/fetch";
import "./MediasForm.css";

export default function MediasForm() {

  const { type } = useParams();
  const [media, setMedia] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneMedia(type, id).then((response) => {
      setMedia(response)
    }).catch((err) => console.log(err))
  }, [id])

  function handleSubmit(event) {
    event.preventDefault();
    updateMedia(type, id, media).then((response) => {
      console.log(response);
      navigate(`/${type}/${id}`);
    }).catch((err) => {
      console.log(err)
    })
  }

  function handleTextChange(event) {
    setMedia({
      ...media,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={media.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={media.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={media.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={media.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={media.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={media.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={media.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={media.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={media.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}
