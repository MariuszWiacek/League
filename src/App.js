
import './App.css';
import 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guestbook from './guestbook';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            FOOTBALL LEAGUE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <button className="btn btn-link nav-link" onClick={() => window.location.href = '/'}>
                Home
              </button>
              <button className="btn btn-link nav-link" onClick={() => window.location.href = '/about'}>
                About
              </button>
              <button className="btn btn-link nav-link" onClick={() => window.location.href = '/betting'}>
                Betting
              </button>
              {/* Add buttons for other pages */}
            </ul>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/betting" element={<BettingPage />} />
            {/* Add more routes for other pages */}
          </Routes>
        </div>

        <div className="footer">
          &copy; 2023 Football League. All rights reserved.
        </div>
      </div>
    </Router>
  );
}

// Define your components for different pages
const HomePage = () => <div>Home Page Content</div>;
const AboutPage = () => <div>About Page Content</div>;
const BettingPage = () => <div> <Guestbook /></div>;

export default App;
