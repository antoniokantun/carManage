import React, { useState } from 'react';

interface FormData {
  nombre: string;
  correo: string;
  contrasena: string;
  confirmar: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  contrasena?: string;
  confirmar?: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    contrasena: '',
    confirmar: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.correo) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }

    if (!formData.contrasena) {
      newErrors.contrasena = 'La contraseña es requerida';
    } else if (formData.contrasena.length < 6) {
      newErrors.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.contrasena !== formData.confirmar) {
      newErrors.confirmar = 'Las contraseñas no coinciden';
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
        <h2 className="text-3xl font-bold text-center mb-4">Registrate</h2>
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
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md ${errors.nombre ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md ${errors.correo ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.correo && (
                <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md ${errors.contrasena ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.contrasena && (
                <p className="text-red-500 text-sm mt-1">{errors.contrasena}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar
              </label>
              <input
                type="password"
                name="confirmar"
                value={formData.confirmar}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md ${errors.confirmar ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.confirmar && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmar}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;