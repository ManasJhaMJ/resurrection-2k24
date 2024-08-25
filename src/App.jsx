import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Team from '../Pages/Team';
import Events from '../Pages/Events';
import ScrollToTop from '../src/ScrollToTop'; // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure the page scrolls to the top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;