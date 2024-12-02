import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types"; // For prop validation

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TextImageSlider = ({ slides, autoplaySpeed = 3000 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: false,
  };

  return (
    <div className="w-full max-w-5xl mx-auto   bg-gradient-to-b from-white via-orange-100 to-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="flex flex-col md:flex-row items-center gap-8 p-6"
              // Tailwind ensures flex direction and alignment
            >
              {/* Text Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-lg pr-52">{slide.description}</p>
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-md w-full md:w-60 h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

TextImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoplaySpeed: PropTypes.number,
};

export default TextImageSlider;
