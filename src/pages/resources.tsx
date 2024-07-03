import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ResourceTab from "@/components/ResourceTab";
import QuizComponent from "@/components/Quiz";

export default function ResourcesPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <div className="flex items-center justify-center">
            <h1 className={title()}>Resources</h1>
            <img
              src="/public/Images/folder.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full max-w-6xl">
          <ResourceTab />
          <QuizComponent />
        </div>
      </section>
    </DefaultLayout>
  );
}
