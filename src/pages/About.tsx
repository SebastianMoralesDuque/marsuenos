import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // Define las rutas de las imágenes en un array
  const images = [
    'https://th.bing.com/th/id/OIP.6439Wipq2jQvMq1PNajKRAHaEK?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.arB1E9VSx3wtQG0LVYg6nAHaDt?pid=ImgDet&rs=1',
    'https://1.bp.blogspot.com/-uYfujhzoI5c/XrNzT4iPX0I/AAAAAAAAAgw/8WwouvkzQIozPO-7NiKlK4AF7HZKhlFdQCLcBGAsYHQ/s640/IMG_4718-min.jpg'
  ];

  // Estado para mantener el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para avanzar al siguiente índice de imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Configura un efecto para cambiar automáticamente la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    // Limpia el intervalo cuando el componente se desmonta o el array de imágenes cambia de longitud
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
        <h2 className="font-sans text-3xl italic hover:not-italic text-white bg-gradient-to-r from-cyan-800 to-sky-400 border-2 rounded-md border-rose-300 border-none hover:border-solid">
          Quienes Somos?
        </h2>
        {/* Resto del contenido sobre Quienes Somos... */}
        {/* ... */}

        {/* Sección de Historia */}
        <h4 className="text-2xl text-yellow-600 pt-4">Historia</h4>
        {/* Contenido sobre la historia... */}
        {/* ... */}

        {/* Sección de Misión */}
        <h4 className="text-2xl text-blue-600 pt-4">Mision</h4>
        {/* Contenido sobre la misión... */}
        {/* ... */}

        {/* Sección de Visión */}
        <h4 className="text-2xl text-blue-600 pt-4">Vision</h4>
        {/* Contenido sobre la visión... */}
        {/* ... */}

        {/* Sección de Política de sostenibilidad */}
        <h4 className="text-2xl text-red-600 pt-4">Política de sostenibilidad</h4>
        {/* Contenido sobre la política de sostenibilidad... */}
        {/* ... */}
      </section>

      {/* Sección de Equipo MARSUEÑOS Viajes y Turismo */}
      <h2 className="font-sans text-3xl italic hover:not-italic text-white bg-gradient-to-r from-cyan-800 to-sky-400 border-2 rounded-md border-rose-300 border-none hover:border-solid">
        Equipo MARSUEÑOS Viajes y Turismo
      </h2>

      {/* Sección de Imágenes del Equipo */}
      <div className="flex flex-wrap justify-center mt-8">
        {/* Renderizar las imágenes del equipo */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="m-2">
            <img
              src={`https://th.bing.com/th/id/R.f5aee6720e5fea7901586edb9f5ad6b0?rik=dUuks0BGaA6f2w&riu=http%3a%2f%2fgkcp.jp%2fwp-content%2fuploads%2f2016%2f09%2fbigstock-Call-Center-79077622.jpg&ehk=nRmim6FPy%2bKzFP7jnwhbgcy1CWAVI6vRtEI2LEQvKxc%3d&risl=&pid=ImgRaw&r=0`} // Reemplaza con la ruta de tus imágenes
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
