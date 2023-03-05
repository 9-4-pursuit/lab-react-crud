import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Media from "./components/medias/Media";
import MediasEditForm from "./components/medias/MediasEditForm";
import MediasIndex from "./components/medias/MediasIndex";
import MediasNewForm from "./components/medias/MediasNewForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<MediasIndex />} />
          <Route path="/:type/new" element={<MediasNewForm />} />
          <Route path="/:type/:id" element={<Media />} />
          <Route path="/:type/:id/edit" element={<MediasEditForm />} />

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
