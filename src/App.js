import React from 'react';
import './App.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const Home = () => (
  <section id="home" className="section">
    <div className="content">
      <h1>Welcome to SK Architects</h1>
      <p>Your vision, our expertise. Creating timeless architecture.</p>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <div className="content">
      <h2>Our Projects</h2>
      {/* Add project cards or thumbnails here */}
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <div className="content">
      <h2>About Us</h2>
      <p>SK Architects is a team of passionate architects dedicated to creating innovative and sustainable designs.</p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <div className="content">
      <h2>Contact Us</h2>
      <p>Get in touch with us for your next architectural project.</p>
      {/* Add a contact form or contact information here */}
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2023 SK Architects. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
