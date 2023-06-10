import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import SingleBlog from './components/SingleBlog';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    // <div className="app">
      
    // </div>
  );
}

export default App;
