import OurTeam from "@/components/OurTeam";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function AboutPage() {
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
        <div className=" py-10 px-4">
          <div className="container mx-auto">
            <section className="mb-10">
              <div className="flex items-center justify-center mb-5">
                <h1 className={title()}>{t("about")}</h1>
                <img
                  src="assets/Images/info.gif"
                  alt="Resources Icon"
                  className="ml-5 w-20 rounded-3xl"
                />
              </div>
              <p className="text-lg text-center">{t("abouttext")}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-5">{t("mission")}</h2>
              <p className="text-lg">{t("missiontext")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">{t("team")}</h2>
              <div className="justify-center ">
                <OurTeam />
              </div>
            </section>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
