import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/commercial" replace />} />
          <Route path="/:category" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
      </main>
    </>
  );
}

export default App;
