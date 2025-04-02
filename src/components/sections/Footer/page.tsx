import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="border-t-4 border-red-600 w-full mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* <!-- Brand & Social Media --> */}
          <div>
            <img
              src="/images/LOGO.webp"
              alt="MIBCS Logo"
              className="w-20 mb-3"
            />
            <p className="font-bold">
              MIBCS: Embracing the Marvel Universe in Every Event.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-white text-xl">
                <Linkedin />
              </a>
              <a href="#" className="text-white text-xl">
                <Instagram />
              </a>
              <a href="#" className="text-white text-xl">
                <Twitter />
              </a>
              <a href="#" className="text-white text-xl">
                <Youtube />
              </a>
            </div>
          </div>
          {/* <!-- Navigation Links --> */}
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Club & Careers --> */}
          <div>
            <h3 className="font-semibold mb-3">Opportunities</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Newsletter Signup --> */}
          <div>
            <h3 className="font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm mb-3">
              Subscribe for the latest Marvel-themed events and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 flex-1 text-black rounded-l-md"
              />
              <button className="bg-red-600 px-4 py-1 rounded-r-md hover:bg-red-500">
                Sign Up
              </button>
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
