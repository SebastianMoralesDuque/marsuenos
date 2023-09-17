import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 rounded-md mb-8">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center ml-10 mt-2">
          <img src="/img/air.png" className="h-10 w-auto" alt="Flowbite Logo" />
        </Link>
      
        <div className="flex md:order-2">
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-4"
            onClick={openModal}
          >
            Inicia sesión
          </button>
          
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:border-transparent">
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 text-${
                  location.pathname === "/" ? "blue-700" : "red-500"
                } bg-clip-text hover:text-blue-700 ${
                  location.pathname === "/"
                    ? " text-blue-700 font-bold"
                    : "text-blue-700"
                } md:dark:hover:text-blue-700`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 text-${
                  location.pathname === "/about" ? "blue-700" : "red-500"
                } bg-clip-text hover:text-blue-700 ${
                  location.pathname === "/about"
                    ? " text-blue-700 font-bold"
                    : "text-blue-700"
                } md:dark:hover:text-blue-700`}
              >
                Empresa
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 text-${
                  location.pathname === "/services" ? "blue-700" : "red-500"
                } bg-clip-text hover:text-blue-700 ${
                  location.pathname === "/services"
                    ? " text-blue-700 font-bold"
                    : "text-blue-700"
                } md:dark:hover:text-blue-700`}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/visas"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 text-${
                  location.pathname === "/visas" ? "blue-700" : "red-500"
                } bg-clip-text hover:text-blue-700 ${
                  location.pathname === "/visas"
                    ? " text-blue-700 font-bold"
                    : "text-blue-700"
                } md:dark:hover:text-blue-700`}
              >
                Visas
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 text-${
                  location.pathname === "/experiences" ? "blue-700" : "red-500"
                } bg-clip-text hover:text-blue-700 ${
                  location.pathname === "/experiences"
                    ? " text-blue-700 font-bold"
                    : "text-blue-700"
                } md:dark:hover:text-blue-700`}
              >
                Experiencias
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 text-${
                  location.pathname === "/contact" ? "blue-700" : "red-500"
                } bg-clip-text hover:text-blue-700 ${
                  location.pathname === "/contact"
                    ? " text-blue-700 font-bold"
                    : "text-blue-700"
                } md:dark:hover:text-blue-700`}
              >
                Contactenos
              </Link>
            </li>
          </ul>
            {/* Aquí agregamos la sección de búsqueda */}
  <div className="ml-4">
    <input
      type="text"
      placeholder="Buscar..."
      className="border rounded px-2 py-1"
    />
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 ml-2 rounded">
      Buscar
    </button>
  </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <Login closeModal={closeModal} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
