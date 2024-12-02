import React from 'react';
import Nav from './nav';
import img from '../../assets/image/groupPhoto.png';
import bg_img from '../../assets/image/Rectangle-27.png';

function BusinessPage() {
  return (
    <div 
      className="min-h-screen text-center bg-contain bg-center " 
      style={{ backgroundImage: `url(${bg_img})` }} // Dynamically setting the background image
    >
      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <div className="pt-32 px-4 flex flex-col items-center">
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Elevate Your Business with <br />
          <span className="text-orange-500 block">Timesseo</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl">
          We help businesses thrive online through effective SEO strategies. Our goal is to
          boost your search engine rankings, drive organic traffic, and increase your brand
          visibility.
        </p>

        {/* Image Section */}
        <div className="mt-8 rounded-lg h-40">
          <img
            src={img}
            alt="Business Team"
            className="rounded-lg w-full max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessPage;
