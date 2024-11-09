import React, { useState } from 'react';

interface FormData {
  correo: string;
  contrasena: string;
}

interface FormErrors {
  correo?: string;
  contrasena?: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    correo: '',
    contrasena: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.correo) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }

    if (!formData.contrasena) {
      newErrors.contrasena = 'La contraseña es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      // Aquí iría la lógica para enviar los datos al servidor
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado izquierdo - Gris con Logo */}
      <div className="w-full md:w-1/2 bg-gray-200 flex flex-col items-center justify-center p-8">
        <div className="w-32 h-32 border-2 border-gray-400 flex items-center justify-center mb-6">
          <span className="text-gray-600 text-xl">Logo</span>
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <p className="text-gray-600 text-center max-w-md">
          ¡Prepárate para un día lleno de adrenalina, elegancia y tecnología de punta!
        </p>
      </div>

      {/* Lado derecho - Formulario */}
      <div className="w-full md:w-1/2 bg-white flex flex-col p-8">
        <div className="max-w-md w-full mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                className={`w-full p-2 border rounded-md ${
                  errors.correo ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.correo && (
                <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full p-2 border rounded-md ${
                  errors.contrasena ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.contrasena && (
                <p className="text-red-500 text-sm mt-1">{errors.contrasena}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Iniciar Sesión
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-600">¿No tienes una cuenta? </span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Regístrate aquí
              </a>
            </div>
          </form>

          {/* Footer */}
          <footer className="mt-12">
            <div className="flex justify-center space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:underline">Política de Privacidad</a>
              <a href="#" className="hover:underline">Términos de Servicio</a>
              <a href="#" className="hover:underline">Configuración de Cookies</a>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              © 2024 Relume. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;