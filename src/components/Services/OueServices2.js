import React, { useEffect } from "react";
import "./ourservices.css";
import ScrollMagic from "scrollmagic";

const OurServices2 = ({ slides }) => {
  useEffect(() => {
    // Initialize ScrollMagic controller
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "80%",
      },
    });


    // Get all slides (sections with .panel class)
    const slides = document.querySelectorAll("section.panel");

    slides.forEach((slide, index) => {
      if (index < slides.length - 1) {
        new ScrollMagic.Scene({
          triggerElement: slide,
          offset: -60,
        })
          .setPin(slide, { pushFollowers: false })
          .addTo(controller);
      }
    });

    // Cleanup on unmount
    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <div>
      <div className="ourservices_main">
        <h2 className="ourservices">Our Services</h2>
        {slides.map((slide, index) => (
          <section
            key={index}
            className={`panel ${index % 2 === 0 ? "blue" : "turquoise"}`}
          >
            <div className="content">
              <div className="left">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="right">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OurServices2;
