import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ResourceTab from "@/components/ResourceTab";
import QuizComponent from "@/components/Quiz";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function ResourcesPage() {
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
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <div className="flex items-center justify-center">
            <h1 className={title()}>{t("resources")}</h1>
            <img
              src="assets/Images/folder.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full max-w-6xl">
          <ResourceTab />
        </div>
      </section>
    </DefaultLayout>
  );
}
