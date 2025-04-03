import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="border-t-4 border-red-600 w-full mb-6"></div>
        <div className="flex justify-center">
          {/* <!-- Brand & Social Media --> */}
          <div className="text-center flex flex-col items-center">
            <img
              src="/images/LOGO.webp"
              alt="MIBCS Logo"
              className="w-20 mb-3"
            />
            <p className="font-bold">
              MIBCS: Embracing the Marvel Universe in Every Event.
            </p>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://www.linkedin.com/company/mibcs-kkwieer"
                target="_blank"
                className="text-white text-xl"
              >
                <Linkedin />
              </a>
              <a href="#" target="_blank" className="text-white text-xl">
                <Instagram />
              </a>
              <a href="#" target="_blank" className="text-white text-xl">
                <Twitter />
              </a>
              <a href="#" target="_blank" className="text-white text-xl">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 MIBCS Club</p>
          <p>
            K.K Wagh Institute Of Engineering Education and Research, Nashik -
            422003
          </p>
        </div>
      </div>
    </footer>
  );
}
