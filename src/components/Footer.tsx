import React from 'react';


const Footer: React.FC = () =>{
    return(
        <footer>
            <div>
                <p>&copy; 2024 Todos los derechos reservados.</p>
            </div>
            <nav>
                <u>
                    <li><a href="/terms">Terminos de Servicios</a></li>
                    <li><a href="/privacy">Politica de Privacidad</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </u>
            </nav>
        </footer>
    );
};

export default Footer;