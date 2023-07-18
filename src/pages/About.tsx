import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentLocation: '',
    city: '',
    observations: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log(formValues);
  };

  return (
    <div className="container mx-auto mt-24">
                <section className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Quienes Somos?</h2>
      <p className="text-gray-800">
        Marsueños es una agencia de viajes especializada en la asesoría personalizada para que nuestros clientes tengan un concepto diferente en compra de viajes, excursiones, cruceros y tiquetes aéreos brindando la mayor comodidad a las personas, encargándonos de todo lo relacionado con la necesidad de aquellas que estén interesadas en cualquiera de estos productos mostrando una gran variedad de posibilidades para sus viajes de negocios o vacaciones.
      </p>
      <p className="text-gray-800 mt-4">
        Tenemos la disponibilidad para desplazarnos hasta el lugar que el cliente lo solicite llámese apartamento, casa, finca u oficina, nuestra intención es proporcionar un ambiente relajado y muy familiar para tomar la mejor decisión en el momento de elegir su destino de viaje.
      </p>
      <p className="text-gray-800 mt-4">
        Además tenemos mucha experiencia en el trámite de visas habiendo atendido un número significativo de personas las cuales su diligencia ha resultado exitosa, caracterizándonos también por el servicio de redención de millas y planes de fidelización con las aerolíneas informando a todos nuestros clientes de este servicio adicional al cual tienen derecho por ser viajeros frecuentes, ofrecemos venta de asistencias médicas y alquiler de vehículos en cualquier lugar del mundo.
      </p>
      </section>

      <h2 className="text-3xl font-bold mb-8 text-center">Solicite Asistencia Personalizada</h2>
      <section className="bg-gray-100 py-8">

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-bold mb-1">Nombre*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-bold mb-1">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-800 font-bold mb-1">Teléfono*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="appointmentDate" className="block text-gray-800 font-bold mb-1">Fecha de la Cita*</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formValues.appointmentDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="appointmentTime" className="block text-gray-800 font-bold mb-1">Hora de la Cita*</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formValues.appointmentTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="appointmentLocation" className="block text-gray-800 font-bold mb-1">Lugar de la Cita*</label>
          <input
            type="text"
            id="appointmentLocation"
            name="appointmentLocation"
            value={formValues.appointmentLocation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-800 font-bold mb-1">Ciudad*</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="observations" className="block text-gray-800 font-bold mb-1">Observaciones</label>
          <textarea
            id="observations"
            name="observations"
            value={formValues.observations}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
        >
          Enviar
        </button>
      </form>
      </section>
    </div>
  );
};

export default ContactForm;
