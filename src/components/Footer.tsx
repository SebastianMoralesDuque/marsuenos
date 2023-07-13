import React, { useState } from 'react';

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
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-auto">
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500">Contacto</h3>
            <p>Teléfono: +123456789</p>
            <p>Email: info@agenciadeviajes.com</p>
            <p>Dirección: Calle Principal, Ciudad</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500">Enlaces útiles</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Destinos</a></li>
              <li><a href="#">Paquetes</a></li>
              <li><a href="#">Promociones</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          <div className="footer-column">
            <h3 className="text-2xl text-pink-500">Suscríbete</h3>
            <p>Recibe nuestras últimas ofertas por correo electrónico:</p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Correo electrónico"
                className="border border-gray-300 rounded px-4 py-2 mt-2 mr-2"
              />
              <button
                onClick={handleSubscribe}
                className="bg-pink-500 hover:bg-pink-600 text-white rounded px-4 py-2 mt-2"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-center">© Derechos de autor Mar Sueños {new Date().getFullYear()}. Todos los derechos reservados. Política de privacidad | Términos de uso</p>
      </div>
    </footer>
  );
};

export default Footer;
