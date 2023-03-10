const URL = process.env.REACT_APP_API_BASE_URL;
// Shows

// Create
export function createShow(show) {
  const options = {  
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json"} 
  } 
  return fetch(`${URL}/shows`, options).then((res) => {
    return res.json()
  });
}

// Delete
export function destroyShow(id) {
  const options = {method : "DELETE"}
  return fetch(`${URL}/shows/${id}`, options).then((res) => res.json());  
      
  
}

// Index/Get all
export function getAllShows() {
 return  fetch(`${URL}/shows`).then((res)=> res.json())
 
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((res) => {
    return res.json();
  });
}

// Movies

export function getAllMovies() {

  return fetch(`${URL}/movies/`).then((res) => res.json());
}

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((res) => res.json());
}

export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, options).then((res) => {
    return res.json();
  });
}

export function createMovie(movie) {
  const options = {  
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json"} 
  } 
  return fetch(`${URL}/movies`, options).then((res) => {
    return res.json()
  });
}

export function destroyMovie(id) {
  const options = {method : "DELETE"}
  return fetch(`${URL}/movies/${id}`, options).then((res) => res.json());  
      
  
}

