import React from "react";
import '../../App.css'

import { farmhouse } from "../Gallery";
import ImageGallery from 'react-image-gallery';
import './Projects.css'
import "react-image-gallery/styles/css/image-gallery.css";


export default function Projects(){
  return(
  <>
  
  <div className="project-title"><p>Farmhouse Project</p></div>
  <div className="image-gallery-wrapper">
  <ImageGallery items={farmhouse}  
        showThumbnails = {false}
        infinite = {true}
        showPlayButton = {false}
        showFullscreenButton = {true}
      />
    </div>

  </>
  )
 
}