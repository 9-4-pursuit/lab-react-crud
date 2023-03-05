// medias
const URL = process.env.REACT_APP_API_BASE_URL


// Create
export function createMedia(type, media) {
  console.log(type);
  const options = {
    method: "POST",
    body: JSON.stringify(media),
    headers: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/${type}/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyMedia(type, id) {
  const options = { method: "DELETE" }
  return fetch(`${URL}/${type}/${id}`, options);
}

// Index/Get all
export function getAllMedias(type) {
  return fetch(`${URL}/${type}`).then((response) => response.json());
}

// media/Get one
export function getOneMedia(type, id) {
  return fetch(`${URL}/${type}/${id}`).then((response) => response.json());
}

// Update
export function updateMedia(type, id, media) {
  const options = {
    method: "PUT",
    body: JSON.stringify(media),
    headers: { "Content-Type": "application/json" },
  }
  return fetch(`${URL}/${type}/${id}`, options).then((response) => response.json())
}
