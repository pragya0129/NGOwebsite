// Import necessary components and styles
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
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
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <div className="max-w-lg text-center">
          <div className="flex items-center justify-center">
            <h1 className={title()}>{t("faqhead")}</h1>
            <img
              src="assets/Images/question.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="max-w-3xl w-full px-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{t("q1.q")}</h2>
            <p className="text-gray-700">{t("q1.a")}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold mb-2">{t("q2.q")}</h2>
            <p className="text-gray-700">{t("q2.a")}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold mb-2">{t("q3.q")}</h2>
            <p className="text-gray-700">{t("q3.a")}</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
