import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductImageGallery = ({ mainImage, gallery = [] }) => {
  const images = [mainImage, ...gallery];
  const [activeImage, setActiveImage] = useState(mainImage);

  const thumbSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(4, images.length),
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div className="main-image mb-3 text-center">
        <img
          src={activeImage}
          alt="Main Product"
          className="img-fluid"
        />
      </div>

      {/* Thumbnail Slider */}
      {images.length > 1 && (
        <Slider {...thumbSettings} key={images.length} className="thumbnail-slider">
          {images.map((img, index) => (
            <div key={index} onClick={() => setActiveImage(img)} className="px-1">
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`img-fluid border ${
                  img === activeImage ? 'border-primary' : 'border-light'
                } rounded`}
                style={{
                  height: '80px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductImageGallery;