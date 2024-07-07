// Import necessary components and styles
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function FAQ() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <div className="max-w-lg text-center">
          <div className="flex items-center justify-center">
            <h1 className={title()}>Frequently Asked Questions</h1>
            <img
              src="assets/Images/question.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="max-w-3xl w-full px-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              What does our NGO do?
            </h2>
            <p className="text-gray-700">
              Our NGO is dedicated to uplifting women, spreading legal
              awareness, and addressing all kinds of legal needs.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold mb-2">How can I volunteer?</h2>
            <p className="text-gray-700">
              You can apply to volunteer by filling out our online application
              form on our website.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold mb-2">How can I donate?</h2>
            <p className="text-gray-700">
              You can donate securely through our QR code on this website or by
              contacting our team directly.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
