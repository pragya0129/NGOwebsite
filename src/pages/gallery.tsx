import React from "react";
import Slider from "react-slick";
import { Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6",
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <h1 className={title()}>Gallery</h1>
        </div>
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold mb-4">Image Slider</h2>
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={index} className="px-2">
                <Card className="overflow-hidden">
                  <Image src={src} alt={`Gallery Image ${index + 1}`} />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold mb-4">Image Collage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <Card key={index} className="overflow-hidden">
                <Image src={src} alt={`Gallery Image ${index + 1}`} />
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold mb-4">Random Display</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {images.map((src, index) => (
              <Card
                key={index}
                className="overflow-hidden w-1/3 md:w-1/4 lg:w-1/6"
              >
                <Image src={src} alt={`Gallery Image ${index + 1}`} />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
