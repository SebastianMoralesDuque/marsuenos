import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Contenido de la página</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
