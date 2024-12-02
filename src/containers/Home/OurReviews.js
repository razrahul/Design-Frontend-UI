import React from "react";
import ClientReview from "../../components/utilit/textImage";
import clientImage from "../../assets/clientImg/ClientImage.png";
// import slideImg1 from "../../assets/serviceImage/slideimg1.png";
import slideImg2 from "../../assets/serviceImage/slideimg2.png";
import slideImg3 from "../../assets/serviceImage/slideimg3.png";
import slideImg4 from "../../assets/serviceImage/slideImg4.png";
import slideImg5 from "../../assets/serviceImage/slideImg5.png";
import slideImg6 from "../../assets/serviceImage/slideImg6.png";

const ReviewsPage = () => {
  const reviewsData = [
    {
      title: "Our Clients Reviews",
      text: "Untypetech transformed our business with a custom software solution that was exactly what we needed.",
      clientName: "John Cena",
      clientPosition: "Manager at Softech Company",
      clientImage: clientImage, // Replace with actual image path
      orbitImages: [
        slideImg2, // Replace with actual image paths
        slideImg3,
        slideImg4,
        slideImg5,
        slideImg6
      ],
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col items-center  py-4 px-4 ">
          {/* Header Section */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Our Clients Reviews
          </h1>
          <div className="w-20 h-[2.5px] bg-orange-500 mb-6"></div>
          {reviewsData.map((review, index) => (
            <ClientReview
              key={index}
              title={review.title}
              text={review.text}
              clientName={review.clientName}
              clientPosition={review.clientPosition}
              clientImage={review.clientImage}
              orbitImages={review.orbitImages}
            />
          ))}

          {/* Content Section */}
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
