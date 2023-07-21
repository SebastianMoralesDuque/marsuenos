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

  const [isHovered, setIsHovered] = useState(false); // State para controlar el hover

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
        <h2
          className={`text-3xl font-bold mb-8 text-center ${isHovered ? 'text-pink-500' : 'text-white'} bg-blue-500 py-6 px-4 rounded-lg`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Quienes Somos?
        </h2>
        <h3 className=" text-2xl text-yellow-600 py-4" >Marsueños</h3>
        <p className="text-gray-800">
           es una agencia de viajes especializada en la asesoría personalizada para que nuestros clientes tengan un concepto diferente en compra de viajes, excursiones, cruceros y tiquetes aéreos brindando la mayor comodidad a las personas, encargándonos de todo lo relacionado con la necesidad de aquellas que estén interesadas en cualquiera de estos productos mostrando una gran variedad de posibilidades para sus viajes de negocios o vacaciones.
        </p>
        <p className="text-gray-800 mt-4">
          Tenemos la disponibilidad para desplazarnos hasta el lugar que el cliente lo solicite llámese apartamento, casa, finca u oficina, nuestra intención es proporcionar un ambiente relajado y muy familiar para tomar la mejor decisión en el momento de elegir su destino de viaje.
        </p>
        <p className="text-gray-800 mt-4">
          Además tenemos mucha experiencia en el trámite de visas habiendo atendido un número significativo de personas las cuales su diligencia ha resultado exitosa, caracterizándonos también por el servicio de redención de millas y planes de fidelización con las aerolíneas informando a todos nuestros clientes de este servicio adicional al cual tienen derecho por ser viajeros frecuentes, ofrecemos venta de asistencias médicas y alquiler de vehículos en cualquier lugar del mundo.
        </p>
      </section>
    </div>
  );
};

export default ContactForm;
