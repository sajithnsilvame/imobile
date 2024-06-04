import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
//import logo from '../assets/imobile-logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* <img
              src={logo}
              alt="iShield Warranty Logo"
              className="h-16 w-60"
            /> */}
            <h1 className="text-2xl text-gray-900 font-bold">iMobile</h1>
            <p className="mt-4 font-semibold">Warranty On iShield</p>
            <p className="mt-4 text-sm">
              Discover the Best Premium Apple Store in Sri Lanka: iPhones,
              MacBooks, iPads, AirPods, and More! Welcome to our premium Apple
              store in Sri Lanka, your one-stop destination for all your Apple
              product needs. We offer an extensive range of Apple products,
              including the latest iPhones, MacBooks, iPads, and AirPods,
              ensuring that you have access to cutting-edge technology.
            </p>
            <p className="mt-4 text-sm">
              At our store, we are dedicated to curating a collection of premium
              brands, offering you the convenience of finding everything you
              need in one place in Sri Lanka. Experience the epitome of quality
              and innovation with us, your trusted source for premium technology
              and entertainment.
            </p>
          </div>
          <div>
            <h2 className="font-bold">Useful Links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Reserve Your Device
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Happy Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                No 561/10/02 Maithripala Senanayake Mw, 50000
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +94 71 6666 555
              </li>

              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +94 71 6666 555
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                sayhello@imobile.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; iMobile (Pvt) Ltd 2024. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3572EF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF70AB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
