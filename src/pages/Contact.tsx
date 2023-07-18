import React, { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  mensaje: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos enviados, como enviar un correo electrónico o guardar en una base de datos.
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-24 text-center mb-6">Contáctenos</h1>      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3986.842092935588!2d-75.6554451!3d4.5611232!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sco!4v1627113544322!5m2!1sen!2sco"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Déjanos un Mensaje</h2>
            <div className="relative mb-4">
              <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Nombre*</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="telefono" className="leading-7 text-sm text-gray-600">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="ciudad" className="leading-7 text-sm text-gray-600">Ciudad</label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="mensaje" className="leading-7 text-sm text-gray-600">Mensaje*</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/2 p-4 bg-gray-100">
              <h3 className="text-xl mb-4">Detalles del Contacto</h3>
              <div className="mb-4">
                <p><strong>Horario de Atención:</strong></p>
                <p>En la Oficina:</p>
                <p>Lunes a Viernes de 08:00 am a 12:00 m y de 02:00 pm a 06:00 pm</p>
                <p>Sábados de 09:00 am a 12:00 m</p>
                <p>Página web:</p>
                <p>Lunes a Viernes de 08:00 am a 12:00 m y de 02:00 pm a 06:00 pm</p>
                <p>Sábados de 09:00 am a 12:00 m</p>
                <p>Vía Celular: Todos los días, todo el día.</p>
              </div>
              <div className="mb-4">
                <p><strong>Barrio:</strong> Laureles</p>
                <p><strong>Dirección:</strong> Carrera 15a #23 Norte 50 Centro Comercial Niteroi Plaza</p>
                <p><strong>Teléfonos:</strong> 57 (6) 7313665 - 57 (6) 7312523 - 57 (6) 7358628 - 57 (6) 7358569</p>
                <p><strong>Celulares:</strong> 313 762 5126 - 313 765 1041</p>
              </div>
            </div>
            <div className="lg:w-1/2 p-4 bg-gray-100">
              <div className="text-right">
                <p><strong>Si deseas cotizar un plan o recibir asesoría para tu viaje:</strong> ventas@marsuenosviajes.com</p>
                <p><strong>Para relaciones comerciales:</strong> mercadeo@marsuenosviajes.com</p>
                <p><strong>Para asuntos administrativos:</strong> gerencia@marsuenosviajes.com</p>
                <p><strong>Sitio web:</strong> www.marsuenosviajes.com</p>
                <p className="font-bold">Oficina</p>
                <p>Carrera 15A #23 Norte - 50, Armenia - Quindío - Colombia</p>
                <p className="font-bold mt-4">Email:</p>
                <p>ventas@marsuenosviajes.com</p>
                <p className="font-bold mt-4">Teléfono:</p>
                <p>+57 313 762 5126 / +57 313 765 1041</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;