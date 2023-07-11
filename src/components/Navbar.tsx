import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMouseEnter = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setActiveMenu('');
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">Logo</div>
          <ul className="flex space-x-4">
            <li
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                id="dropdownToggle"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Home
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {activeMenu === 'home' && (
                <div
                  id="dropdownMenu"
                  className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  onMouseEnter={() => handleMouseEnter('home')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                id="dropdownToggle"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                About
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {activeMenu === 'about' && (
                <div
                  id="dropdownMenu"
                  className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                id="dropdownToggle"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Contact
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {activeMenu === 'contact' && (
                <div
                  id="dropdownMenu"
                  className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Submenu 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
