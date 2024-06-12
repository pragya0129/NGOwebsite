import React from "react";
import "./MarqueeComponent.css";

const MarqueeComponent = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <>
      <div className="marquee-container mb-20">
        <div className="marquee">
          {images.concat(images).map((src, index) => (
            <img key={index} alt="" src={src} className="w-40 h-40 mx-2" />
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeComponent;
