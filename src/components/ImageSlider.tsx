import React from "react";
import "./MarqueeComponent.css";

const MarqueeComponent = () => {
  const images = [
    "/public/Images/ngo (1).png",
    "/public/Images/ngo (2).png",
    "/public/Images/community.png",
    "/public/Images/hands (1).gif",
    "/public/Images/community.png",
    "/public/Images/community.png", 
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
