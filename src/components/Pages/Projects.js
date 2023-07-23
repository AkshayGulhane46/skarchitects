import React from "react";
import '../../App.css'

import { farmhouse  , building1 , building3 , building4 , building2 , building5} from "../Gallery";
import ImageGallery from 'react-image-gallery';
import './Projects.css'
import "react-image-gallery/styles/css/image-gallery.css";


export default function Projects(){
  return(
  <>
   <div className="projects">
      <div className="project-details">
        <div className="image-gallery-wrapper">
          <ImageGallery
            items={farmhouse}
            showThumbnails={false}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
        <div className="text-details">
          <div className="project-title"><p>Farmhouse Project</p></div>
          <div className="project-description"><p>Farmhouse design is a timeless architectural style that has endured for centuries, embodying a sense of simplicity, functionality, and charm. Rooted in rural traditions, the farmhouse design is characterized by its practicality, cozy aesthetics, and a strong connection to the surrounding natural environment. While its origins lie in agricultural settings, the farmhouse design has found a place in modern architecture, blending tradition with contemporary elements.

Key features of farmhouse design include:

<br/><br/>1.Simple Form: Farmhouses typically exhibit a straightforward, rectangular shape with a gabled or hipped roof. The focus is on functionality and efficiency, rather than elaborate ornamentation.

<br/>2.Materials: Traditional farmhouses were constructed using locally sourced materials, often reflecting the regional vernacular. This could include wood, stone, brick, or a combination of these materials. Modern farmhouses may incorporate more contemporary materials while still preserving the essence of the style.

<br/>3.Front Porch: A hallmark of farmhouse architecture is the inviting front porch. This covered outdoor space provides a place for residents to relax, connect with neighbors, and enjoy the views of the surrounding landscape.

<br/>4.Large Windows: Farmhouses typically feature large windows that allow ample natural light to enter the interior spaces. These windows often have a simple, symmetrical arrangement, adding to the balanced and harmonious appearance of the house.

<br/>5.Functional Layout: The interior layout of a farmhouse is designed to be practical and efficient, catering to the needs of a working family. Common elements include open floor plans, spacious kitchens, and mudrooms to handle muddy boots and farm equipment.

<br/> 6.Exposed Beams and Woodwork**: To maintain the authentic rustic charm, farmhouses often showcase exposed wooden beams and woodwork throughout the interior. This adds warmth and character to the space.</p></div>
        </div>
      </div>

      {/* Repeat the above pattern for other projects */}

      <div className="project-details">
        <div className="image-gallery-wrapper">
          <ImageGallery
            items={farmhouse}
            showThumbnails={false}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
        <div className="text-details">
          <div className="project-title"><p>Farmhouse Project</p></div>
          <div className="project-description"><p>This is our flagship project</p></div>
        </div>
      </div>
    </div>

  </>
  )
 
}