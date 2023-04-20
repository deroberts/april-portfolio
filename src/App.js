import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Social from "./components/Social";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <Router>
      <Navbar onAboutClick={() => setShowProfile(false)} />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    {/* commenting out for the moment, it seems to make a duplicate */}
    {/* <div>
      {showProfile && <Profile />}
    </div> */}
    <div>
      <Social />
    </div>
    </Router>
  );
}

export default App;
