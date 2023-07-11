import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
