// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// console.log(process.env);
// Create
export function createShow(show) {
  return;
}

// Delete one show
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then(res => res.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then(res => res.json());
}

// Delete one movie
export function destroyMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}

// export const filterShows = (search, shows) => {
//   return shows.filter((show) => {
//     return show.title.toLowerCase().match(search.toLowerCase());
//   })
// }