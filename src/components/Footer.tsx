import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaTripadvisor } from 'react-icons/fa';
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
    <footer className="w-full bg-blue text-white py-8 bg-gradient-to-r from-red-400 from-10% via-sky-400 via-30% to-blue-400 to-90%">
      {/* Contenedor principal */}
      <div className="container mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0 md:flex-row md:space-x-8">
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Contacto */}
          <div className="footer-column">
            <h3 className="text-2xl text-black mb-4">Contáctenos</h3>
            <p className="pb-2">
              <FaPhone className="inline-block mr-2 " /> 123456789
            </p>
            <p className="pb-2">
              <FaEnvelope className="inline-block mr-2" />
              ventas@marsuenosviajes.com
            </p>
            <p className="pb-2">
              <FaMapMarkerAlt className="inline-block mr-2" /> Carrera 15A #23 Norte - 50, Armenia - Quindio - Colombia
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto ">
          {/* Columna de Enlaces Útiles */}
          <div className="footer-column ">
            <h3 className="text-2xl text-black mb-4">Links</h3>
            <ul>
              <li><IoIosAirplane className="inline-block mr-2 " /><a href="#" className="text-white hover:text-red-700 transition-colors duration-300">Inicio</a></li>
              <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="text-white hover:text-blue-800 transition-colors duration-300">Destinos</a></li>
              <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="text-white hover:text-red-700 transition-colors duration-300">Paquetes</a></li>
              <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="text-white hover:text-blue-800 transition-colors duration-300">Promociones</a></li>
              <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="text-white hover:text-red-700 transition-colors duration-300">Contacto</a></li>
              <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="text-white hover:text-blue-800 transition-colors duration-300">Visas</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Suscripción */}
          <div className="footer-column">
            <h3 className="text-2xl text-black mb-4">Boletín</h3>
            <p>Dejanos tu correo para que compartamos experiencias<br></br>
              de vacaciones y viajes:</p>
            <div className="flex mt-2 text-red-500">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 mr-2 w-full"
              />
              <button
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2 bg-red-500 shadow-lg shadow-red-500/50"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          {/* Columna de Redes Sociales */}
          <div className="footer-column">
            <h3 className="text-2xl text-black mb-4">Siguenos!</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 animate-bounce " ><FaFacebook size={30} /></a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 animate-bounce"><FaTwitter size={30} /></a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 animate-bounce"><FaYoutube size={30} /></a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 animate-bounce"><FaInstagram size={30} /></a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 animate-bounce"><FaTripadvisor size={30} /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Contenedor inferior */}
      <div className="container mx-auto mt-auto mt-5 pt-6">
        <p className="text-red-500 text-center">© Copyrights <span className="text-white">Mar Sueños</span> {new Date().getFullYear()}.
          Todos los derechos reservados. <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 underline">Politicas de Privacidad</a> | <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 underline">Terminos de Uso</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


