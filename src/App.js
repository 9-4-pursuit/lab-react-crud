import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<ShowsIndex />} />
          <Route path="/:type/new" element={<ShowsNewForm />} />
          <Route path="/:type/:id" element={<Show />} />
          <Route path="/:type/:id/edit" element={<ShowsEditForm />} />

          {/* <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/:id/edit" element={<MoviesEditForm />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
