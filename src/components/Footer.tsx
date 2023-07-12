import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">

      <div className='footer-container'>
        <div className='footer-column'>
        <h3>Contacto</h3>
            <p>Teléfono: +123456789</p>
            <p>Email: info@agenciadeviajes.com</p>
            <p>Dirección: Calle Principal, Ciudad</p>
        </div>
      </div>

      <div className="container mx-auto">
        <p className="text-center">© Copyrights Mar Sueños  {new Date().getFullYear()} Todos los derechos reservados. Politicas de Privacidad | Terminos de Uso</p>
      </div>


    </footer>
  );
};

export default Footer;
