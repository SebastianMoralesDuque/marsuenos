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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl mb-4">Contáctenos</h3>
          <p className="mb-2">
            <FaPhone className="inline-block mr-2" /> 123456789
          </p>
          <p className="mb-2">
            <FaEnvelope className="inline-block mr-2" />
            ventas@marsuenosviajes.com
          </p>
          <p>
            <FaMapMarkerAlt className="inline-block mr-2" /> Carrera 15A #23 Norte - 50, Armenia - Quindio - Colombia
          </p>
        </div>

        <div>
          <h3 className="text-2xl mb-4">Links</h3>
          <ul>
            <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="hover:text-red-500">Inicio</a></li>
            <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="hover:text-red-500">Destinos</a></li>
            <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="hover:text-red-500">Paquetes</a></li>
            <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="hover:text-red-500">Promociones</a></li>
            <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="hover:text-red-500">Contacto</a></li>
            <li><IoIosAirplane className="inline-block mr-2" /><a href="#" className="hover:text-red-500">Visas</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl mb-4">Boletín</h3>
          <p>Dejanos tu correo para que compartamos experiencias de vacaciones y viajes:</p>
          <div className="flex mt-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="border rounded py-2 px-3 mr-2 w-full"
            />
            <button
              onClick={handleSubscribe}
              className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-4"
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Mar Sueños. Todos los derechos reservados.</p>
      </div>

      <div className="container mx-auto mt-4">
        <div className="flex items-center justify-center">
          <div className="mr-4">
            <img src="/img/colombia.png" alt="Colombia" className="h-4" />
          </div>
          <a href="/privacy" className="underline hover:text-blue-500 transition-colors duration-300">
            Privacidad
          </a>
          <a href="/terms" className="ml-4 underline hover:text-blue-500 transition-colors duration-300">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
