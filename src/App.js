import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CustomCursor from './customCursor';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-between">
    <CustomCursor />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
