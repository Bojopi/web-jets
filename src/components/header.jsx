import React, { Fragment } from 'react'

import '../css/header.css';

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="titulo">
                    <div className="icono">
                        <img src="" alt="" />
                    </div>
                    <div className="tit-jets">
                        <h1>JETS</h1>
                    </div>
                    <div className="tit-texto">
                        <h3>Jornadas Empresariales, Tecnológicas y Sociales</h3>
                    </div>
                </div>
                <div className="navbar">
                    <a href="#" className="activo">INICIO</a>
                    <a href="#">¿QUÉ ES JETS?</a>
                    <a href="#">GALERÍA</a>
                    <a href="#">EXPOSITORES</a>
                    <a href="#">CONTÁCTANOS</a>
                    <a href="#">EVENTO ONLINE</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;