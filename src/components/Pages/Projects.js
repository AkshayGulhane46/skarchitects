import React from "react";
import '../../App.css'
import Cards from '../Cards';
import Gallery from "../Gallery";

export default function Projects(){

    const galleryImages = [
        {
          img:'https://www.pexels.com/photo/low-angle-photography-white-concrete-building-under-blue-sky-1870768/'
        },
        {
          img:'https://www.pexels.com/photo/low-angle-photography-of-concrete-buildings-1824392/'
        }, {
          img:'https://www.pexels.com/photo/black-and-white-window-blinds-1816031/'
        },
      ]

     return(
        <Gallery galleryImages = {galleryImages}/>
     )

 
}
