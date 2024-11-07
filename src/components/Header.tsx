// components/Header.tsx
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800">
            CarManage
          </Link>
          
          <div className="flex gap-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900"
            >
              Inicio
            </Link>
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-gray-900"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="text-gray-600 hover:text-gray-900"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header