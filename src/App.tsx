import React from 'react';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div>
      <AppRoutes />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-24">Contenido de la página</h1>
      </div>
      <Footer />
      
    </div>
  );

};

export default App;
