import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Aquí puedes agregar la lógica para suscribir al usuario
    // utilizando el valor de 'email'
    console.log('Correo electrónico:', email);
  };

  return (
    <footer className="w-full bg-[#010566] text-white py-8">
      {/* Contenedor principal */}
      <div className="container mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0 md:flex-row md:space-x-8">
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Contacto */}
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500 mb-4">Contact</h3>
            <p>
              <FaPhone className="inline-block mr-2" /> Phone: +123456789
            </p>
            <p>
              <FaEnvelope className="inline-block mr-2" /> Email:
              info@travelagency.com
            </p>
            <p>
              <FaMapMarkerAlt className="inline-block mr-2" /> Address: Main
              Street, City
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Enlaces Útiles */}
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500 mb-4">Useful Links</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-pink-500 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-pink-500 transition-colors duration-300">Destinations</a></li>
              <li><a href="#" className="text-white hover:text-pink-500 transition-colors duration-300">Packages</a></li>
              <li><a href="#" className="text-white hover:text-pink-500 transition-colors duration-300">Promotions</a></li>
              <li><a href="#" className="text-white hover:text-pink-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Suscripción */}
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500 mb-4">Subscribe</h3>
            <p>Receive our latest offers by email:</p>
            <div className="flex mt-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 mr-2 w-full"
              />
              <button
                onClick={handleSubscribe}
                className="bg-pink-500 hover:bg-pink-600 text-white rounded px-4 py-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Redes Sociales */}
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-pink-500 transition-colors duration-300"><FaFacebook size={30} /></a>
              <a href="#" className="text-white hover:text-pink-500 transition-colors duration-300"><FaTwitter size={30} /></a>
              <a href="#" className="text-white hover:text-pink-500 transition-colors duration-300"><FaInstagram size={30} /></a>
            </div>
            <div className="flex items-center mt-4">
              <IoIosAirplane className="text-pink-500 text-7xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Contenedor inferior */}
      <div className="container mx-auto mt-auto">
        <p className="text-pink-500 text-center">© Mar Dreams {new Date().getFullYear()}
          All rights reserved. Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
