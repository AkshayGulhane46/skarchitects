import React, { useState } from 'react';
import "../Styles/Home.scss";
import { useParallax } from "react-scroll-parallax";

const Home = () => {
  const [isBlurred, setBlurred] = useState(false);

  const toggleBlur = () => {
    setBlurred(!isBlurred);
  };

  return (
    <>
      <div className='top'>
        <h1>we are</h1>
        <p>SK ARCHITECTS</p>
        <div className='img-container'>
          <img src="" alt='Building'></img>
        </div>
      </div>
      <div className='our-work'>
        <div className='heading'></div>
      </div>
      <div className='middle'>
        <div className='projects'>
          <div className='project-1'>
            <div className="img-container">
              <img src='' alt='Building'></img>
              <div className='overlay-text'>
                <div className='project-name'>
                  <p>The Farmhouse</p>
                </div>
                <div className='project-details'>
                  <p>This is the farmhouse</p>
                </div>
                <div className='project-button'>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
