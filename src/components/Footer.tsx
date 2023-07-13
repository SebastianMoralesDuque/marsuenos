import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-auto">
          <div className="footer-column">
            <h3>Contacto</h3>
            <p>Teléfono: +123456789</p>
            <p>Email: info@agenciadeviajes.com</p>
            <p>Dirección: Calle Principal, Ciudad</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          <div className="footer-column">
            <h3>Enlaces útiles</h3>
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
            <h3>Otra columna</h3>
            <p>Contenido de la tercera columna</p>
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
