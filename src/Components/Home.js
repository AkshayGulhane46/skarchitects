import React, { useEffect, useState } from 'react';
import "../Styles/Home.scss";
import { useParallax } from "react-scroll-parallax";

const Home = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleProjectInfo = () => {
    console.log("infor shows")
    setShowInfo(!showInfo);
}

const navigateToProjectDetails = () => {
  // You can replace '/project-details' with the actual path to your project details page
  
};


  return (
    <>
      <div className='top'>
          <h1>we are</h1>
          <p>SK ARCHITECTS</p>
          <div className='img-container'>
              <img src='building1.png'></img>
          </div>
  
      </div>
      <div className='our-work'>
        <div className='heading'>

        </div>
      </div>
      <div className='middle'>
        <div className='projects'>
        <div className={`project-1 ${showInfo ? 'show-info' : ''}`} onClick={toggleProjectInfo}>
      <div className='project-name'>
        <p> The Farmhouse </p>
        <p className="project-info">Some information about the project</p>
        {showInfo && (
          <button className="more-info-button" onClick={navigateToProjectDetails}>
            More Info
          </button>
        )}
      </div>
      <div className='img-container'>
        <img src='farmhouse3.jpg' alt='Farmhouse Image' />
      </div>
    </div>

          <div className='project-1'>
              <div className='project-name'>
                <p> The House 1 </p>
              </div> 
              <div className='img-container'>
                  <img src='building3.jpg'></img>
              </div>
          </div>
           <div className='project-1'>
              <div className='project-name'>
                <p> The Farmhouse </p>
              </div> 
              <div className='img-container'>
                <img src='building4.png'></img>
              </div>
          </div>
           <div className='project-1'>
              <div className='project-name'>
                <p> The Farmhouse </p>
              </div> 
              <div className='img-container'>
                <img src='building5.png'></img>
              </div>
          </div>
        </div>
        <div className='project-1'>
              <div className='project-name'>
                <p> The Farmhouse </p>
              </div> 
              <div className='img-container'>
                <img src='building21.png'></img>
              </div>
          </div>
      </div>
      
    </>
  );
};

export default Home;

