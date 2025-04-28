import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Features from './components/Features';
import Contact from './components/Contact';
import Signup from './components/Signup';
import About from './components/About';
import Login from './components/Login';
import Reservations from './components/Reservations';
import CountTrack from './components/CountTrack';
import Formvalidation from './components/Formvalidation';
import Services from './components/services';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Rooms" element={<Rooms />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="Reservations" element={<Reservations />} />
          <Route path="CountTrack" element={<CountTrack />} />
          <Route path="Formvalidation" element={<Formvalidation />} />
          <Route path="Services" element={<Services />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;