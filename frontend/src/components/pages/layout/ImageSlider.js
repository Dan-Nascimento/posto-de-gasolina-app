import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import img1 from '../../../img/ico-destinonegocio-como-abrir-um-posto-de-gasolina-istock-getty-images1.jpg'; // Correct path
import img2 from '../../../img/post_thumbnail-db20998d8244ab4d7fbda92f37d58f34-683x400.jpeg'; // Correct path
import img3 from '../../../img/posto.jpg'; // Correct path
import './ImageSlider.css'; // Import the CSS file

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [img1, img2, img3];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
