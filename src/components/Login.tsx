import React, { useState, useEffect, useRef, useCallback } from 'react';

interface LoginProps {
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para realizar la autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegisterClick = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowLoginForm(false);
      setIsTransitioning(false);
    }, 250);
  }, []);

  const handleLoginClick = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowLoginForm(true);
      setIsTransitioning(false);
    }, 250);
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && event.target instanceof Node && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`bg-white rounded-lg p-8 transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
      ref={modalRef}
    >
      {showLoginForm ? (
        <>
          <h2 className="text-xl font-bold mb-4 text-center">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            {/* Formulario de inicio de sesión */}
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
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Iniciar Sesión
              </button>
            </div>
            <p className="mt-4 text-center">
              ¿No tienes cuenta?{' '}
              <button className="text-blue-700" onClick={handleRegisterClick}>
                Regístrate
              </button>
            </p>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4 text-center">Registro</h2>
          <form onSubmit={handleSubmit}>
            {/* Formulario de registro */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="fullName"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
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
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Registrarse
              </button>
            </div>
            <p className="mt-4 text-center">
              ¿Ya tienes cuenta?{' '}
              <button className="text-blue-700" onClick={handleLoginClick}>
                Inicia sesión
              </button>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
