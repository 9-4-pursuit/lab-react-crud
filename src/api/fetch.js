const URL = process.env.REACT_APP_API_BASE_URL;

/***** SHOWS *****/
// Get all Shows
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Get one Show
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${URL}/shows/`, options).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/shows/${id}`, options).then((response) => response.json());
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}



/***** MOVIES *****/
// Get all Movies
export async function getAllMovies() {
  return await fetch(`${URL}/movies`).then((response) => response.json());
}

// Get one Movie
export async function getOneMovie(id) {
  return await fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// Create
export async function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" }
  };
  return await fetch(`${URL}/movies/new`, options).then((response) => response.json());
}

// Update
export async function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" }
  }
  return await fetch(`${URL}/movies/${id}`, options).then((response) => response.json());
}

// Delete
export async function destroyMovie(id) {
  const options = { method: "DELETE" };
  return await fetch(`${URL}/movies/${id}`, options);
}