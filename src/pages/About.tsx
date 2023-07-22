import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const images = ['https://www.marsuenosviajes.com/files/editor/images/b1620151006050151.jpg', 'https://www.marsuenosviajes.com/files/editor/images/b1620151006050151.jpg', 'https://www.marsuenosviajes.com/files/editor/images/b1620151006050151.jpg']; // Agrega aquí las rutas de tus imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Sección de Imagen */}
      <section className="h-screen-80 bg-gray-200 flex items-center justify-center pt-20">
        {/* Mostrar la imagen actual */}
        <img
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          className="max-h-full max-w-full mx-auto"
        />
      </section>

       {/* Sección "Quienes Somos" */}
       <section className="container mx-auto mt-8 bg-gray-100 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center bg-blue-500 py-6 px-4 rounded-lg text-white">
          Quienes Somos?
        </h2>
        <h3 className="text-2xl text-yellow-600 py-4">Marsueños</h3>
        <p className="text-gray-800 text-sm mt-4">
           Es una agencia de viajes especializada en asesorías personalizadas, ofreciendo a nuestros clientes una experiencia diferente en la compra de viajes, excursiones, cruceros y tiquetes aéreos brindándoles comodidad y exclusividad, encargándonos de los requerimientos de quienes estén interesados en adquirir los productos, mostrando gran variedad de posibilidades para sus viajes de negocios o vacaciones.
        </p>
        <p className="text-gray-800 mt-4 text-sm mt-4">
          Nuestro equipo de trabajo está en la capacidad de desplazarse hasta el lugar donde el cliente lo necesite puede ser el apartamento, casa, finca u oficina, nuestra intención es proporcionar un ambiente confortable y familiar para tomar la mejor decisión en el momento de elegir su destino de viaje.
        </p>
        <p className="text-gray-800 mt-4 text-sm mt-4">
          Los colaboradores de la empresa cuenta con una amplia experiencia que permite tener el conocimiento adecuado para el manejo de proveedores y operadores reflejándose en una excelente atención especializada con los clientes; lo que genera altos márgenes de confiabilidad seguridad y transparencia.
        </p>
        <p className="text-gray-800 mt-4 text-sm" >
          A nivel organizacional Marsueños está estructurada en todas las áreas, administrativa, comercial, financiera y legal garantizando un enfoque empresarial pertinente que orientara una excelente prestación de servicio a sus clientes.
        </p>
        <h4 className="text-2xl text-yellow-600 pt-4">Historia</h4>
        <p className="text-gray-800 mt-4 text-sm ">
          
          MARSUEÑOS VIAJES Y TURISMO Nació a mediados del año 2013 gracias al emprendimiento de una joven pareja Quindiana (MARCELA ARIAS _ MAURICIO GOMEZ). Estos esposos obedeciendo a su empuje y tenacidad decidieron dar rienda suelta a su osadía y encarar un reto como es la creación de empresa. Siendo conscientes de los contratiempos contando principalmente con el apoyo de la familia y la convicción de tener todo lo necesario para este proyecto combinado con la experiencia de cada uno de ellos decidieron dar ese gran paso.
        </p>
        <p className="text-gray-800 mt-4 text-sm">
          Marcela Arias  se desempeñó como ejecutiva de ventas por un periodo de 11 años en varias agencias de viajes reconocidas de la ciudad de Armenia obteniendo experiencia y capacidad de venta en productos y servicios turísticos excepcionales; debido a su carácter fuerte, carisma, amabilidad  y sensibilidad con la gente logró generar en los clientes un reconocimiento especial que le ha ayudado a convertirlos hoy por hoy en sus propios clientes producto del buen servicio, eficacia y satisfacción que obtuvo cada uno de ellos en su momento.
        </p>
        <p className="text-gray-800 mt-4 text-sm">
          Por su parte Mauricio Gómez es un profesional en  Administración de Negocios y Especialista en Gerencia de Marketing que se desempeña como  gestor de emprendimiento, con una amplia experiencia en la parte de planeación, formulación y ejecución de proyectos del Fondo Emprender (SENA). Su conocimiento fue creciendo gracias a todo el número de personas que han sido atendidas por él y la cantidad de proyectos que ha debido guiar, monitorear y corregir para hacer de estos empresas productivas y sostenibles, razón por la cual se sintió con la capacidad de llevar a cabo la realización de su propia empresa, naciendo así MARSUEÑOS una agencia de viajes sostenible y con una visión clara y prospectiva, que apunta a un servicio personalizado, especializado y de mejoramiento continuo que aporta directamente al desarrollo económico de la región, cumpliendo con los requisitos legales y empresariales.
        </p>
        <h4 className="text-2xl text-blue-600 pt-4">Mision</h4>
        <p className="text-gray-800 mt-4 text-sm">
        
          Marsueños es una agencia de viajes enfocada en prestar un excelente servicio a nivel interno y externo a través de asesorías personalizadas y especializadas que cumplan las expectativas del cliente generando confianza, seguridad y comodidad, manejando un clima organizacional que garantice el buen funcionamiento de la empresa a través de personal idóneo y capacitado.
        </p>
        <h4 className="text-2xl text-blue-600 pt-4">Vision</h4>
        <p className="text-gray-800 mt-4 text-sm">
          En el 2020 Marsueños será líder en el sector de las agencias de viaje a nivel local, consolidando un excelente direccionamiento organizacional, actualizándose permanentemente en la prestación del servicio para satisfacción del cliente.
        </p>
        <h4 className="text-2xl text-red-600 pt-4"> Política de sostenibilidad</h4>
        <p className="text-gray-800 mt-4 text-sm">
    
          Marsueños Viajes y Turismo S.A.S. es una agencia de viajes enfocada en la satisfacción del cliente interno y externo, nuestro trabajo está direccionado a ofrecer un servicio personalizado, competitivo y oportuno; todo bajo el cumplimiento de los requisitos legales y la búsqueda de la mejora continua de la organización.
        </p>
        <p className="text-gray-800 mt-4 text-sm">
          Desarrollamos actividades turísticas responsables y justas para el talento humano de la empresa y aplicamos prácticas de sostenibilidad que nos permitan contribuir con el cuidado del patrimonio cultural, el buen uso de los recursos naturales y al desarrollo socioeconómico del Quindío.
        </p>
      </section>


        <h2 className='text-3xl pt-10'>Equipo MARSUEÑOS Viajes y Turismo</h2>
        {/* Sección de Imágenes */}
        <div className="flex flex-wrap justify-center mt-8">
          {/* Renderizar las 10 imágenes */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="m-2">
              <img
                src={`https://www.marsuenosviajes.com/files/galerias/m420170818112322.jpeg`} // Reemplaza con la ruta de tus imágenes
                alt={`Imagen ${index + 1}`}
                className="w-300 h-300"
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default ContactForm;
