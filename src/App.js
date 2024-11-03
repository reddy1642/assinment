import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar'; 
import Home from './Homepage';
import About from './Aboutus';
import Contact from './Contactus';
import TaskList from './tasklist';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default App;

