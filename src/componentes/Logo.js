import React from "react"
import logoPagina from '../imagenes/logo-pagina.png';
import '../stylesheets/Logo.css';

function Logo(){
    return(<div className='logo-contenedor'>
        <img 
        className='logo-imagen'
        src={logoPagina}
        alt='Imagen logo'/>
        </div>);
}
export default Logo;