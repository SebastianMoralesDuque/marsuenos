import React, { useState } from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 sm:mt-24 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10">
        ¡Descubre Nuestros Servicios!
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          title="Hoteles"
          description="Te asesoramos para que tu alojamiento tenga los mejores servicios de calidad, comodidad y precio."
          imageSrc="https://th.bing.com/th/id/OIP.08FL68JKNzjDZTJ81JzQ0QHaHa?pid=ImgDet&rs=1"
        />
        {/* Resto de las tarjetas de servicio */}
      </section>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <article
      className={`p-4 sm:p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105`}
    >
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>
      {showFullDescription ? (
        <p className="text-gray-600">{description}</p>
      ) : (
        <p className="text-gray-600">{description.substring(0, 100)}...</p>
      )}
      <button
        onClick={toggleDescription}
        className="text-red-500 mt-4 inline-block"
      >
        {showFullDescription ? 'Leer Menos' : 'Leer Más'}
      </button>
    </article>
  );
};

export default Services;
