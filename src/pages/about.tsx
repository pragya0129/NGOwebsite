import MissionMetrics from "@/components/MissionMatrix";
import OurTeam from "@/components/OurTeam";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className=" py-10 px-4">
          <div className="container mx-auto">
            <section className="mb-10">
              <div className="flex items-center justify-center mb-5">
                <h1 className={title()}>About Us</h1>
                <img
                  src="/public/Images/info.gif"
                  alt="Resources Icon"
                  className="ml-5 w-20 rounded-3xl"
                />
              </div>
              <p className="text-lg text-center">
                Our NGO is dedicated to improving lives and making the world a
                better place through various programs and initiatives. Our team
                works tirelessly to create positive change and provide support
                to those in need.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-5">Our Mission</h2>
              <p className="text-lg">
                Our mission is to empower communities and individuals by
                providing essential resources, education, and support. We strive
                to make a lasting impact through our comprehensive programs and
                initiatives.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-5">Our Vision</h2>
              <p className="text-lg">
                We envision a world where every individual has the opportunity
                to reach their full potential. We aim to create sustainable
                solutions that address the root causes of poverty and
                inequality.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">Our Team</h2>
              <div className="flex flex-wrap -mx-4 justify-center ">
                <Card isFooterBlurred radius="lg" className="border-none m-1">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={200}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button
                      className="text-tiny text-white bg-black/20"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      Notify me
                    </Button>
                  </CardFooter>
                </Card>
                <Card isFooterBlurred radius="lg" className="border-none m-1">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={200}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button
                      className="text-tiny text-white bg-black/20"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      Notify me
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
