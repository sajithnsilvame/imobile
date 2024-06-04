import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 ${
        isScrolled ? "bg-gray-900 bg-opacity-80" : "bg-gray-900"
      } text-white shadow-md transition duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a className="flex flex-col items-start" href="">
            <h1 className="text-2xl">iMobile</h1>
            <span>Anuradhapura</span>
          </a>
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <a
              href="#"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              iPhone
            </a>
            <a
              href="#"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              iPad
            </a>
            <a
              href="#"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              AirPods
            </a>
            <div className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Watch
              </a>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Bands
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Series 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Series 6
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Series 7
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Series 8
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Series 9
                </a>
              </div>
            </div>
            <a
              href="#"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Mac
            </a>
            <div className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Accessories
              </a>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Adapters & Cables
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Airtag
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Apple Pencil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  EarPods
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  GoPro
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Hubs
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Mouse & Keyboard
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  PlayStation
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Power Bank
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Protective covers
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Tempered Glass
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Virtual Reality
                </a>
              </div>
            </div>
            <a
              href="#"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Speakers
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Menu as="div" className="relative">
              <div>
                <Menu.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Menu.Button>
              </div>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        iPhone
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        iPad
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        AirPods
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        Watch
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        Mac
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        Accessories
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-700" : "bg-gray-800"
                        } block px-4 py-2 text-sm text-gray-300`}
                      >
                        Speakers
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
