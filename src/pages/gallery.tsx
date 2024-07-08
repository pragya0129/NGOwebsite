import Slider from "react-slick";
import { Card, Image, Divider } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";
import { Code } from "@nextui-org/code";
import GalleryImageList from "@/components/GalleryImagelist";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
    "assets/Images/Gallery/photo1.jpg",
    "assets/Images/Gallery/photo2.jpg",
    "assets/Images/Gallery/photo4.jpg",
    "assets/Images/Gallery/photo5.jpg",
    "assets/Images/Gallery/photo6.jpg",
    "assets/Images/Gallery/photo7.jpg",
  ];
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-2">
          <div className="flex items-center justify-center">
            <h1 className={title()}>{t("gallery")}</h1>
            <img
              src="assets/Images/photo-gallery.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full mb-8">
          <div className="gcontainer">
            <Code size="md" className="mb-2 hidden lg:block">
              {t("hoverimg")}
            </Code>
            <Code size="md" className="mb-2 sm:hidden">
              {t("clickimg")}
            </Code>
            <div className="gallery-wrap">
              <div className="item item-1"></div>
              <div className="item item-2"></div>
              <div className="item item-3"></div>
              <div className="item item-4"></div>
              <div className="item item-5"></div>
            </div>
          </div>
          <Divider className="my-4 bg-black" />
        </div>

        <div className="w-full mb-8">
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={index} className="">
                <Card className="overflow-hidden w-[20rem] h-[20rem] justify-center">
                  <Image src={src} alt={`Gallery Image ${index + 1}`} />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </DefaultLayout>
  );
}
