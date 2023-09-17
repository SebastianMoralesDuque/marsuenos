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
  const [error, setError] = useState<string | null>(null); // State para gestionar errores
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validación básica de entrada
    if (!email.includes('@')) {
      setError('Correo electrónico no válido');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Simulación de autenticación (aquí puedes llamar a tu API de autenticación real)
    try {
      const response = await simulateAuthentication(email, password);
      // Comprobar si la autenticación fue exitosa (simulada)
      if (response.success) {
        console.log('Inicio de sesión exitoso');
        setError(null); // Limpiar cualquier error anterior
        // Realizar otras acciones después del inicio de sesión exitoso, como redireccionar al usuario.
      } else {
        setError('Error de autenticación. Verifica tus credenciales.');
      }
    } catch (error) {
      setError('Hubo un problema al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
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

  // Simulación de autenticación (reemplazar con tu lógica de autenticación real)
  const simulateAuthentication = async (email: string, password: string) => {
    return new Promise<{ success: boolean }>((resolve) => {
      // Simular una demora en la respuesta (para imitar una solicitud a un servidor)
      setTimeout(() => {
        // Aquí deberías realizar una llamada real a tu API de autenticación
        // En este ejemplo, simplemente comprobamos si el correo y la contraseña son "admin"
        if (email === 'admin' && password === 'admin') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000); // Simulamos una respuesta después de 1 segundo
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className={`bg-white rounded-lg p-8 w-full max-w-md transition-transform duration-300 transform ${isTransitioning ? 'scale-0' : 'scale-100'}`} ref={modalRef}>
        {showLoginForm ? (
          <>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="md:w-96 mx-auto">
              {/* Formulario de inicio de sesión */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Mostrar mensaje de error si existe */}
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  className="w-full md:w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  className="w-full md:w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500">
                  Iniciar Sesión
                </button>
              </div>
              <p className="mt-4 text-center">
                ¿No tienes cuenta?{' '}
                <button className="text-blue-600" onClick={handleRegisterClick}>
                  Regístrate
                </button>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Registro</h2>
            <form onSubmit={handleSubmit} className="md:w-96 mx-auto">
              {/* Formulario de registro */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Mostrar mensaje de error si existe */}
              <div className="mb-4">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Nombre Completo"
                  className="w-full md:w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  className="w-full md:w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  className="w-full md:w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500">
                  Registrarse
                </button>
              </div>
              <p className="mt-4 text-center">
                ¿Ya tienes cuenta?{' '}
                <button className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-4" onClick={handleLoginClick}>
                  Inicia Sesión
                </button>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
