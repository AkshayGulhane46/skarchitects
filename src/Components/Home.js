import React, { useEffect } from 'react';
import "../Styles/Home.scss";

const Home = () => {
  useEffect(() => {
    const parallax = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', parallax);

    return () => {
      window.removeEventListener('scroll', parallax);
    };
  }, []);

  return (
    <>
    <div className='top'>
      <h1 className="parallax" data-speed="0.9">SK Architects</h1>
      <img className="parallax" data-speed="0.3" src='./homeImage.png' alt="Home Image" />
    </div>
    <div className='middle'>
      <h2>Projects</h2>
      <img src='./homeImage.png' alt="Home Image" />

    </div>
    </>
  );
};

export default Home;
