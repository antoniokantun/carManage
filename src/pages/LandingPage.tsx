// pages/LandingPage.tsx
const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 p-8">
          <h1 className="text-4xl font-bold mb-2">Texto Informativo</h1>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet</p>
          
          <div className="flex gap-4">
            <button 
              onClick={() => window.location.href = '/register'}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Registrarte
            </button>
            
            <button 
              onClick={() => window.location.href = '/login'}
              className="bg-white text-black px-6 py-2 rounded border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-white py-4">
          <div className="container mx-auto px-4">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="text-xl font-bold">Logo</div>
            </div>
            
            {/* Links */}
            <div className="flex justify-center gap-8 text-sm text-gray-600 mb-2">
              <a href="#" className="hover:text-gray-900">Política de Privacidad</a>
              <a href="#" className="hover:text-gray-900">Términos de Servicio</a>
              <a href="#" className="hover:text-gray-900">Configuración de Cookies</a>
            </div>
            
            {/* Copyright */}
            <div className="text-center text-sm text-gray-600">
              © 2024 CarManage. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default LandingPage