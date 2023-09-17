import React from 'react';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow overflow-y-auto">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <AppRoutes />
        </div>
      </main>
      <footer className="bg-blue-500">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
