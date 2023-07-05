import React from "react";
import '../../App.css'

import { images } from "../Gallery";
import ImageGallery from 'react-image-gallery';
import './Projects.css'
import "react-image-gallery/styles/css/image-gallery.css";


export default function Projects(){
  return(
  <div className="image-gallery-wrapper">
        <ImageGallery items={images}  
        infinite 
        showFullscreenButton
        autoPlay 
        showPlayButton = 'false'
        showThumbnails='false'
        showNav='false'
        lazyLoad
        />
    
      </div>
  )
 
}
