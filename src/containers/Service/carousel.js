import React from "react";
import TextImageSlider from "../../components/cruousel/TextImageSlider";
import seoImage1 from "../../assets/serviceImage/slideimg1.png";
import seoImage2 from "../../assets/serviceImage/slideimg2.png";
import seoImage3 from "../../assets/serviceImage/slideimg3.png";
import slideImg4 from "../../assets/serviceImage/slideImg4.png";
import slideImg5 from "../../assets/serviceImage/slideImg5.png";
import slideImg6 from "../../assets/serviceImage/slideImg6.png";

function ServicCaro() {
  const slides = [
    {
      title: "Off-Page SEO Services",
      description:
        "Build authority through high-quality backlinks and strategic outreach, increasing your site's credibility and search performance.",
      image: seoImage1,
    },
    {
      title: "Technical SEO Services ",
      description:
        "Improve site speed, mobile-friendliness, and fix technical issues, ensuring search engines can easily crawl and index your site.",
      image: seoImage2,
    },
    {
      title: "Keyword Research Services",
      description:
        "Discover and target valuable keywords to increase traffic, drive conversions, and enhance your overall SEO strategy.",
      image: seoImage3,
    },
    {
      title: "Content Optimization Services",
      description:
        "Maximize the effectiveness of existing content by enhancing keyword relevance, readability, and alignment with SEO best practices.",
      image: slideImg4,
    },
    {
      title: "SEO Consulting Services ",
      description:
        "Receive expert advice and tailored strategies to solve SEO challenges, improve performance, and achieve long-term success.",
      image: slideImg5,
    },
    {
      title: "Link Buildings Services ",
      description:
        "Acquire high-quality backlinks that improve domain authority and search rankings while increasing traffic and visibility.",
      image: slideImg6,
    },
  ];

  return (
    <div className=" min-h-[90vh] ">
      <div className="mt-20 bg-[#FEEBDC]  bg-gradient-to-b from-white via-orange-100 to-white max-h-96  pt-16">
      <div className="flex justify-center">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Our <span className="text-orange-500">Services</span>
        <div className="ml-12 mt-2 w-[8rem] h-[2.5px] bg-gradient-to-r from-[#FCB900] to-[#FF6900]"></div>

      </h1>
       
      </div>
      <TextImageSlider slides={slides} autoplaySpeed={3000} />
      </div>
    </div>
  );
}

export default ServicCaro;
