import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Rooms from './components/Rooms';
import Features from './components/Features';
import Contact from './components/Contact';
import Signup from './components/Signup';
import About from './components/About';
import Login from './components/Login';
import Reservations from './components/Reservations';

import Formvalidation from './components/Formvalidation';
import Services from './components/services';
import BookingConfirmationPage from './components/BookingConfirmationPage'; // Irinde kuyitirira Home
import Mybookings from './components/Mybookings'; 
import BookingPage from './components/BookingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Rooms" element={<Rooms />} />
          <Route path="Features" element={<Features />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="Reservations" element={<Reservations />} />
         
          <Route path="Formvalidation" element={<Formvalidation />} />
          <Route path="Services" element={<Services />} />
          <Route path="BookingConfirmationPage" element={<BookingConfirmationPage />} />
          <Route path="Mybookings" element={<Mybookings />} />
          <Route path="/book-room/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
