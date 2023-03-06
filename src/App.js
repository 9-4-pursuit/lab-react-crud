import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsForm from "./components/shows/ShowsForm";
import MoviesIndex from "./components/movies/MoviesIndex"
import Movie from "./components/movies/Movie";
import Form from "./components/movies/Form";
// import MoviesEditForm from "./components/movies/MoviesEditForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shows" element={<ShowsIndex />} />

          <Route path="/shows/:id" element={<Show />} />

          <Route path="/shows/new" element={<ShowsForm />} />

          <Route path="/shows/:id/edit" element={<ShowsForm />} />

          <Route path="/movies" element={<MoviesIndex />} />

          <Route path="/movies/:id" element={<Movie />} />

          <Route path="/movies/new" element={<Form />} />

          <Route path="/movies/:id/edit" element={<Form />} />
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
