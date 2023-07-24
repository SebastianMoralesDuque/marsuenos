import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Experiences from '../pages/Experiences';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<Experiences/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
