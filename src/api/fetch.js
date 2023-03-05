// Shows
const URL = process.env.REACT_APP_API_BASE_URL


// Create
export function createShow(type, show) {
  console.log(type);
  
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/${type}/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyShow(type, id) {
  const options = { method: "DELETE" }
  return fetch(`${URL}/${type}/${id}`, options);
}

// Index/Get all
export function getAllShows(type) {
  return fetch(`${URL}/${type}`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(type, id) {
  return fetch(`${URL}/${type}/${id}`).then((response) => response.json());
}

// Update
export function updateShow(type, id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  }
  return fetch(`${URL}/${type}/${id}`, options).then((response) => response.json())
}





// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}
