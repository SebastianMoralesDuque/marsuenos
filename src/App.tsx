import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow overflow-y-auto">
          <div className="container mx-auto py-4">
            <AppRoutes />
          </div>
        </main>
        <footer className="bg-gray-200">
          <Footer />
        </footer>
      </div>
  );
};

export default App;
