import { Link } from "@nextui-org/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "@/components/navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButton";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      {/* <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">NGO Name</h2>
              <p className="text-gray-400">
                Dedicated to making the world a better place. zz{" "}
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-400">
            &copy; {new Date().getFullYear()} NGO Name. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}
