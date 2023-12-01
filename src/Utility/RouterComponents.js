import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer'

function RouterComponent() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default RouterComponent;
