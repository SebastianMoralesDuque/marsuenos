import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center">Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <Card
          title="Hoteles"
          description="Te Asesoramos para que tu alojamiento tenga los mejores servicios de calidad comodidad y precio"
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Hoteles"
          description="Te Asesoramos para que tu alojamiento tenga los mejores servicios de calidad comodidad y precio"
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Asistencias Médicas"
          description="Para Que Viajes Seguro"
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Quinceañeras"
          description="Una Aventura Insuperable para una fecha inolvidable, Vive la magia de tus 15 Años de la mejor manera."
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Excursiones"
          description="Todo Tipo de excursiones familiares y grupos empresariales"
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Alquiler de Vehículos"
          description="Encuentra con nosotros el servicio de vehículos alquilados en cualquier lugar del mundo"
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Cruceros"
          description="Te ofrecemos el servicio más especializado en cruceros alrededor del mundo, para que tu experiencia sea realmente inolvidable."
          imageSrc="https://via.placeholder.com/300"
        />
        <Card
          title="Venta de Tiquetes"
          description="En Marsueños tenemos variedad de tiquetes con múltiples aerolíneas alrededor del mundo"
          imageSrc="https://via.placeholder.com/300"
        />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`p-6 bg-white shadow-lg rounded-lg ${
        hovered ? 'bg-blue-200' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="text-blue-500 mt-4 inline-block">
        Leer Más
      </a>
    </div>
  );
};

export default Services;
