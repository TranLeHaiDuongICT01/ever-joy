import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Competition from "./pages/Competition/Competition";
import NewsGallery from "./pages/NewsGallery/NewsGallery";
import Partner from "./pages/Partner/Partner";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/news-gallery" element={<NewsGallery />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
