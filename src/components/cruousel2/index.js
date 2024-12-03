import React, { useEffect, useRef } from "react";
import "./style.css"; // Assuming the styles are placed in a separate CSS file

const Section = ({ id, className, title, content }) => (
  <div className={className} id={id}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>{content}</p>
  </div>
);

const Slider = () => {
  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      sections.current.forEach(({ element, originalTop }) => {
        if (scrollTop >= originalTop) {
          element.classList.add("latched");
        } else {
          element.classList.remove("latched");
        }
      });
    };

    const sectionElements = Array.from(document.querySelectorAll(".section"));
    sections.current = sectionElements.map((section) => ({
      element: section,
      originalTop: section.offsetTop,
    }));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacus risus, eu sagittis felis. Praesent in feugiat elit. Pellentesque sem turpis, ornare et porttitor quis, placerat sit amet lacus.";

  return (
    <div className="container">
      <div className="spacer"></div>
      <Section id="one" className="section one" title="ONE" content={loremIpsum} />
      <div className="spacer"></div>
      <Section id="two" className="section two" title="TWO" content={loremIpsum} />
      <div className="spacer"></div>
      <Section id="three" className="section three" title="THREE" content={loremIpsum} />
      <div className="spacer"></div>
      <Section id="four" className="section four" title="FOUR" content={loremIpsum} />
      <div style={{ clear: "both" }}></div>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Slider;
