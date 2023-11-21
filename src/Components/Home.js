import React, { useEffect, useState } from 'react';
import "../Styles/Home.scss";
import { useParallax } from "react-scroll-parallax";

const Home = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeFixed = scrollTop > 100; // Adjust the threshold as needed
      setIsFixed(shouldBeFixed);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const heroNameClassName = isFixed ? 'hero-name fixed' : 'hero-name';

  return (
    <>
      <div className='top'>
        <div className={heroNameClassName}>
          <h1>we are</h1>
          <p>SK ARCHITECTS</p>
          <img src='building1.png'></img>
        </div>
      </div>
      <div className='middle'>
        <div className='projects'>
          <div className='project-1'>
            <p> The Farmhouse </p>
          </div>
          <div className='project-2'>
            <p> The Farmhouse 2 </p>
          </div>
          <div className='project-3'>
            <p> The Farmhouse 3</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;

