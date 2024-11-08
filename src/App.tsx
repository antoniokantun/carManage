// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoute';

const App: React.FC = () => {
  return (
    <Router> {/* Envuelve toda la aplicación en Router */}
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
