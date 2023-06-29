import React, { useState, useEffect } from 'react';

const FeaturedCrops = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch the image files from the folder or provide them statically
    const imageFiles = [
      '/src/assets/updates/pexels-alexas-fotos-2255459.jpg',
      '/src/assets/updates/pexels-brett-jordan-840111.jpg',
      '/src/assets/updates/pexels-mark-stebnicki-2255801.jpg',
      '/src/assets/updates/pexels-mark-stebnicki-2255920.jpg',
      '/src/assets/updates/pexels-markus-spiske-2818573.jpg',
      '/src/assets/updates/pexels-math-21393.jpg',
      '/src/assets/updates/pexels-quang-nguyen-vinh-2132171.jpg'
    ];

    setImages(imageFiles);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the current image index
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [currentImageIndex, images]);

  return (
    <div className='Updates'>
      <img src={images[currentImageIndex]} alt="Slideshow" style={{height:'100%',width:'100%'}} />
    </div>
  );
};

export default FeaturedCrops;
