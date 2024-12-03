import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TextImageSlider = ({ slides }) => {
  const sliderRef = useRef(null); // Reference to the slider
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const [isScrollAllowed, setIsScrollAllowed] = useState(false); // Control screen scroll after slider completion

  const handleScroll = (event) => {
    if (!isScrollAllowed) {
      event.preventDefault(); // Block screen scroll
      const direction = event.deltaY > 0 ? "down" : "up"; // Detect scroll direction

      if (sliderRef.current) {
        const slider = sliderRef.current;
        if (direction === "down" && currentSlide < slides.length - 1) {
          slider.slickNext(); // Move to the next slide
        } else if (direction === "up" && currentSlide > 0) {
          slider.slickPrev(); // Move to the previous slide
        }
      }
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next); // Update the current slide index
    },
    afterChange: (current) => {
      if (current === slides.length - 1) {
        setIsScrollAllowed(true); // Enable screen scrolling after the last slide
      } else {
        setIsScrollAllowed(false); // Keep screen scrolling disabled
      }
    },
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentSlide, isScrollAllowed]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-b from-white via-orange-100 to-white">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center gap-8 p-6">
              {/* Text Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-lg">{slide.description}</p>
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
};

export default TextImageSlider;
