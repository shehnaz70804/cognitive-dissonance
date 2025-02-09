// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// Import other pages/components as needed
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Add a top margin/padding to account for the fixed Navbar */}
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
