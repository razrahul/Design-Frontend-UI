import React from "react";
import "./AboutSection.css"; // Import the CSS file
import img1 from "../../assets/image/Aboutimg1.png";
import img2 from "../../assets/image/Aboutimg2.png";
import img3 from "../../assets/image/Aboutimg3.png";

const AboutSection = () => {
  return (
    <div className="mt-36 bg-white p-4 md:p-16 h-full max-h-svg ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-8 relative">
        {/* Left Side: Images */}
        <div className="flex-1 relative">
          {/* Background Image */}
          <div
            className="img1-background">
             <img
              src={img1}
              alt="Professional meeting"
              className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Foreground Images */}
          <div className="img2-background">
            <img
              src={img2}
              alt="Professional meeting"
              className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="img3">
            <img
              src={img3}
              alt="Discussion"
              className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="pt-10 flex-1 text-left flex flex-col items-center ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Timesseo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a dynamic team of SEO experts committed to empowering
            businesses by unlocking their full digital potential. With a wealth
            of experience in the industry, we know that no two businesses are
            alike, which is why we craft personalized SEO strategies that align
            with your specific goals.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our approach goes beyond improving search rankings—we focus on
            delivering ethical and impactful solutions that enhance user
            experience, build trust, and drive sustainable growth. At the core
            of our mission is a dedication to transparency, measurable results,
            and a partnership mindset, ensuring your success is our top
            priority.
          </p>
          <button className="mt-6 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-600">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
