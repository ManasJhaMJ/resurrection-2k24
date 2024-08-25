import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Team from '../Pages/Team';
import Events from '../Pages/Events';
import ScrollToTop from '../src/ScrollToTop'; // Import the ScrollToTop component
import Sponsor from './components/Sponsors/Sponsor';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure the page scrolls to the top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsor />} />
      </Routes>
    </Router>
  );
}

export default App;