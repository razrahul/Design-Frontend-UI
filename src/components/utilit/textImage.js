import React from "react";

const ClientReview = ({ title, text, clientName, clientPosition, clientImage, orbitImages }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center  rounded-lg shadow-md max-w-4xl p-6 h-96"
    style={{
      // width:"1204px",
      // height:"766px",
      background: "#FFFAE3",
      boxShadow: "0px 0px 120px 0px #FCB900CC inset",
    }}>
    {/* Left Section: Review */}
    <div className="md:w-1/2 mb-6 md:mb-0">
      <p className="text-gray-700 text-lg md:text-xl font-medium  mb-4">
        "{text}"
      </p>
      <div>
        <h3 className="pt-4 text-2xl font-semibold text-[#000000] text-center">{clientName}</h3>
        <p className="text-sm text-[#000000] text-center">{clientPosition}</p>
      </div>
    </div>

    {/* Right Section: Orbit Design */}
    <div className="relative md:w-1/2 flex items-center justify-center min-h-80">
      {/* Orbit Center Image */}
      <img
        src={clientImage}
        alt="Client"
        className="w-24 h-24 rounded-full border-4 border-orange-400"
      />
      {/* Orbit Images */}
      <div className="absolute w-56 h-56 rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center">
        {orbitImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Orbit Client ${index + 1}`}
            className={`w-10 h-10 rounded-full absolute border-2 border-white ${
              index === 0
                ? "top-0 left-1/2 transform -translate-x-1/2"
                : index === 1
                ? "bottom-0 left-1/2 transform -translate-x-1/2"
                : index === 2
                ? "left-0 top-1/2 transform -translate-y-1/2"
                : "right-0 top-1/2 transform -translate-y-1/2"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
    
  );
};

 

export default ClientReview;
