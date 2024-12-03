// OurServices.jsx
import React, { useEffect } from 'react';
import './ourservices.css';
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

const OurServices = () => {
  useEffect(() => {
    // Initialize ScrollMagic controller
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: '90%',
      },
    });

    // Get all slides (sections with .panel class)
    const slides = document.querySelectorAll('section.panel');
    // const length = slides.length;
    // console.log(length);
    
    // const handleScroll = (event) => {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   return false;
    // };

    // Create a scene for every slide
    // slides.forEach((slide, index) => {
    //  const scene=  new ScrollMagic.Scene({
    //     triggerElement: slide,
    //   })
    //   if (index < length-1) {
    //     scene.setPin(slide, { pushFollowers: false, });
    //     scene.addTo(controller);
    //   } else {
    //     // scene.removePin();
    //     // scene.addTo(controller);
    //     return;
    //     // return () => window.removeEventListener("wheel", handleScroll);
    //   }
    //     // .setPin(slide, { pushFollowers: false, })
    //     //.addIndicators() // add indicators (requires plugin)
    //     // .addIndicators({name: "1 (duration: 300)"})
    //     // .addIndicators({ name: `Slide ${index + 1}` }) // Uncomment to see debug indicators
    //     // .addTo(controller)
        
    // });

    slides.forEach((slide, index) => {
      if (index < slides.length - 1) {
        new ScrollMagic.Scene({ triggerElement: slide })
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
        <h2 className="ourservices">our services</h2>
      <section className="panel blue">

        <div className="content">
          <div className="left">
            <h2>My Div Web Development</h2>
            <p>Web Development "My Div Description"</p>
          </div>
          <div className="right">
            <img src="./images/webapplication.png" alt="Web Development" />
          </div>
        </div>
      </section>

      <section className="panel turquoise">
        <div className="content">
          <div className="left">
            <h2>My Div Web Development</h2>
            <p>Web Development "My Div Description"</p>
          </div>
          <div className="right">
            <img src="./images/ai.png" alt="Web Development" />
          </div>
        </div>
      </section>

      <section className="panel green">
        <div className="content">
          <div className="left">
            <h2>My Div Web Development</h2>
            <p>Web Development "My Div Description"</p>
          </div>
          <div className="right">
            <img src="https://via.placeholder.com/300" alt="Web Development" />
          </div>
        </div>
      </section>

      <section className="panel bordeaux">
        <div className="content">
          <div className="left">
            <h2>My Div Web Development</h2>
            <p>Web Development "My Div Description"</p>
          </div>
          <div className="right">
            <img src="https://via.placeholder.com/300" alt="Web Development" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;