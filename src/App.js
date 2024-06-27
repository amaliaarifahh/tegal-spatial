//|| PAGES
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Clustering from "./pages/Clustering/MapClustering";
import MapboxStorytelling from "./pages/Story/StoryTelling";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";

//|| LIBRARY
import { HashRouter, Routes, Route } from "react-router-dom";

// || STYLE
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Clustering" element={<Clustering />} />
          <Route path="/Story" element={<MapboxStorytelling />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
