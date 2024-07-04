import React from "react";
import "./MarqueeComponent.css";

const MarqueeComponent = () => {
  const images = [
    "assets/Images/ngo (3).png",
    "assets/Images/solidarity.png",
    "assets/Images/people.png",
    "assets/Images/give.png",
    "assets/Images/charity (1).png",
    "assets/Images/balance.png",
    "assets/Images/feminine.png",
    "assets/Images/kindness.png",
    "assets/Images/pride.png",
    "assets/Images/healthcare.png",
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
