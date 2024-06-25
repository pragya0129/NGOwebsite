import React from "react";
import "./MarqueeComponent.css";

const MarqueeComponent = () => {
  const images = [
    "/public/Images/ngo (3).png",
  
    "/public/Images/solidarity.png",
    "/public/Images/people.png",
    "/public/Images/give.png",
    "/public/Images/charity (1).png",
    "/public/Images/balance.png",
    "/public/Images/feminine.png",
    "/public/Images/kindness.png",
    "/public/Images/pride.png",
    "/public/Images/healthcare.png",

  ];

  return (
    <div className="marquee-container mb-20">
      <div className="marquee">
        {images.map((src, index) => (
          <img key={index} alt="" src={src} className="image" />
        ))}
        {images.map((src, index) => (
          <img key={images.length + index} alt="" src={src} className="image" />
        ))}
      </div>
    </div>
  );
};

export default MarqueeComponent;
