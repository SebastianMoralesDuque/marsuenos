import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="col-span-2">
          <Carousel
            showThumbs={false}
            showStatus={false}
            onChange={handleSlideChange}
            selectedItem={activeIndex}
            showArrows={true}
            infiniteLoop={true}
            className="carousel-container"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                alt="image 1"
                className="w-full h-96 object-cover carousel-image"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                alt="image 2"
                className="w-full h-96 object-cover carousel-image"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                alt="image 3"
                className="w-full h-96 object-cover carousel-image"
              />
            </div>
          </Carousel>
          <div className="flex justify-center mt-4">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-white w-8' : 'bg-white/50 w-4'
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <section className="bg-gray-100 py-8">
            <div className="max-w-screen-lg mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <ServiceCard
                  title="La mejor asesoría"
                  description="Nuestro objetivo es que los clientes disfruten durante su experiencia de compra, por eso te ofrecemos diferenciales de compra para hacer mejor tu experiencia."
                  imageSrc="https://via.placeholder.com/300"
                />
                <ServiceCard
                  title="Grandes experiencias y promociones"
                  description="¿Aún no sabes donde serán tus próximas vacaciones? Te invitamos a conocer nuestros planes propuestos, especiales para cada tipo de viajero, y muchas promociones que tenemos constantemente para ti. ¡Las opciones son muchas!"
                  imageSrc="https://via.placeholder.com/300"
                />
                <ServiceCard
                  title="Nuestra nueva ubicación"
                  description="Ahora estamos en el mall Niteroi Plaza, un lugar más grande y cómodo para ti. Disfruta de un ambiente más agradable, de nuestro parqueadero gratis para clientes, fácil accesibilidad para todos y un montón de otros lugares donde pasar un buen rato acompañado de una deliciosa comida."
                  imageSrc="https://via.placeholder.com/300"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 ${
        hovered ? 'bg-blue-200' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-500 inline-block">
        Leer Más
      </a>
    </div>
  );
};

export default Home;
