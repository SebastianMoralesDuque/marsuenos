import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para realizar la autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleModalClose = () => {
    // Aquí puedes agregar la lógica para cerrar el modal
    console.log('Cerrando el modal');
  };

  return (
    <div className="bg-white rounded-lg p-8">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-lg">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
