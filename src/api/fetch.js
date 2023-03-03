// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json())
}

// Show/Get one
export function getOneShow(id) {
  return;
}

// Update
export function updateShow(id, show) {
  return;
}




// Movies

// Create
export function createMovie(show) {
  return;
}

// Delete
export function destroyMovie(id) {
  return;
}

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json())
}

// Show/Get one
export function getOneMovie(id) {
  return;
}

// Update
export function updateMovie(id, show) {
  return;
}