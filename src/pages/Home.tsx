// pages/Home.tsx
const Home = () => {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header/Nav */}
        {/* <header className="bg-gray-200 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">Logo</div>
            <nav className="flex gap-6">
              <a href="#" className="hover:text-gray-600">Mis vehículos</a>
              <a href="#" className="hover:text-gray-600">Mis seguros</a>
              <a href="#" className="hover:text-gray-600">Mis socios</a>
              <a href="#" className="hover:text-gray-600">Mis rentas</a>
              <button className="hover:text-gray-600">Cerrar sesión</button>
            </nav>
          </div>
        </header> */}
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Welcome Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">¡Bienvenido Administrador!</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Nombre:</span></p>
                <p><span className="font-medium">Datos:</span></p>
              </div>
            </div>
  
            {/* Vehicles Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Vehículos</h2>
            </div>
          </div>
  
          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Insurance Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Seguros</h2>
            </div>
  
            {/* Partners Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Socios</h2>
            </div>
  
            {/* Maintenance Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Mantenimiento</h2>
            </div>
  
            {/* Rentals Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Rentas</h2>
            </div>
  
            {/* Users Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Usuarios</h2>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="bg-gray-200 py-4 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8 text-sm text-gray-600 mb-2">
              <a href="#" className="hover:text-gray-900">Política de Privacidad</a>
              <a href="#" className="hover:text-gray-900">Términos de Servicio</a>
              <a href="#" className="hover:text-gray-900">Configuración de Cookies</a>
            </div>
            <div className="text-center text-sm text-gray-600">
              © 2024 CarManage. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default Home