// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create / Read / Update / Delete

export function requestData(method, endpoint, id = null, data = null) {
  let url = `${URL}/${endpoint}`;

  if (id !== null) {
    url += `/${id}`;
  }

  const options = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };

  if (data !== null) {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options).then((res) => res.json())
}

// create
//requestData('POST', 'shows', null, show)

// getAllShows
// requestData('GET', 'shows')

// getOneShow
// requestData('GET', 'shows', id)

// update
// requestData('PUT', 'shows', id, show)

// delete
// requestData('DELETE', 'shows', id)

// Create a filter function to match the search argument(user input) and the items argument(shows or movies).

export const filterItems = (search, items) => {
  return items.filter((item) => {
    return item.title.toLowerCase().match(search.toLowerCase());
  });
}

//----------------------------------------------------------------------//


// // Create
// export function createShow(show) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(show),
//     headers: { "Content-Type": "application/json" },
//   };
//   return fetch(`${URL}/shows/`, options).then((res) => res.json())
// }

// // Delete one show
// export function destroyShow(id) {
//   const options = { method: "DELETE" };
//   return fetch(`${URL}/shows/${id}`, options);
// }

// // Update
// export function updateShow(id, show) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(show),
//     headers: { "Content-Type": "Application/json" },
//   };
//   return fetch(`${URL}/shows/${id}`, options).then(res => res.json());
// }

// // Index/Get all
// export function getAllShows() {
//   return fetch(`${URL}/shows`).then((response) => response.json());
// }

// // Get one show
// export function getOneShow(id) {
//   return fetch(`${URL}/shows/${id}`).then(res => res.json());
// }













