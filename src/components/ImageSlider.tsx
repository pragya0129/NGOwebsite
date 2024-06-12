import React from "react";
import "./MarqueeComponent.css";

const MarqueeComponent = () => {
  const images = [
    "/public/Images/ngo (1).png",
    "/public/Images/ngo (2).png",
    "/public/Images/community.png",
    "/public/Images/hands (1).gif",
  ];

  return (
    <>
      <div className="marquee-container mb-20">
        <div className="marquee">
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              alt=""
              src={src}
              className="w-40 h-40 mx-2 border-5"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeComponent;
