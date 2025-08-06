// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <main>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="doctors">
                <Doctors />
              </div>
              <div id="facilities">
                <Facilities />
              </div>
              <div id="blog">
                <Blogs />
              </div>
            </main>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;