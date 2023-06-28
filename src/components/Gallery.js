import React, { useState } from 'react'

const Gallery = ({galleryimages}) => {
   const [slideNumber, setSlideNumber] = useState(0);
   const [openModel , setOpenModel] = useState(false);

  return (
    <>
    <div>Gallery</div>
    <div className='gallerywrap'>
        {
            
        }
    </div>
    </>
  )
}

export default Gallery