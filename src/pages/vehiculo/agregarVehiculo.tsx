import React, { useState } from 'react';

const AgregarVehiculo: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <div >
                <h1 className='font-semibold text-2xl text-center'>Mis vehiculos</h1>
            </div>
            <div className="flex gap-8 p-6">
            
            {/* Formulario a la izquierda */}
            <form className="w-1/2 space-y-4">
            <h1 className='font-semibold text-2xl text-center'>Agregar vehiculo</h1>
                <div>
                    <label htmlFor="automovil" className="block text-sm font-medium text-gray-700">Automóvil</label>
                    <input type="text" id="automovil" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Marca/Modelo" />
                </div>
                <div>
                    <label htmlFor="placas" className="block text-sm font-medium text-gray-700">Placas</label>
                    <input type="text" id="placas" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Número de placas" />
                </div>
                <div>
                    <label htmlFor="socio" className="block text-sm font-medium text-gray-700">Socio</label>
                    <input type="text" id="socio" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Nombre del socio" />
                </div>
                <div>
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                    <input type="text" id="color" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Color del vehículo" />
                </div>
                <div>
                    <label htmlFor="mantenimiento" className="block text-sm font-medium text-gray-700">Mantenimiento</label>
                    <input type="text" id="mantenimiento" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Último mantenimiento" />
                </div>
            </form>

            {/* Campo de imagen y botón a la derecha */}
            <div className="w-1/2 flex flex-col items-center">
                {/* Campo de Imagen */}
                <div className="relative w-80 h-80 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img src={image || "https://via.placeholder.com/150"} alt="Vehículo" className="object-cover w-full h-full" />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                </div>

                {/* Botón de Guardar */}
                <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Guardar</button>
            </div>
        </div>
        </div>
    );
};

export default AgregarVehiculo;
