import React, { Fragment } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import '../css/header.css';

//imagenes
import timon_blanco from '../images/timon_fondo_blanco.jpeg'
import timon_rojo from '../images/timon_fondo_rojo.jpeg'

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="titulo">
                    <div className="logo">
                        <div className="icono">
                            <img src={timon_rojo} alt="" />
                        </div>
                    </div>
                    <div className="cont-tit">
                        <div className="tit-jets">
                            <h1>JETS</h1>
                        </div>
                        <div className="tit-texto">
                            <h3>Jornadas Empresariales, Tecnológicas y Sociales</h3>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    {/* <Link
                    className="nav-item"
                    activeClass="active"
                    to="#"
                    spy={true}
                    smooth={true}
                    duration={500}>
                        INICIO
                    </Link>
                    <Link
                    className="nav-item"
                    activeClass="active"
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}>
                        ¿QUÉ ES JETS?
                    </Link>
                    <Link
                    className="nav-item"
                    activeClass="active"
                    to="galeria"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}>
                        GALERÍA
                    </Link>
                    <Link
                    className="nav-item"
                    activeClass="active"
                    to="expo"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}>
                        EXPOSITORES
                    </Link>
                    <Link
                    className="nav-item"
                    activeClass="active"
                    to="contacto"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}>
                        CONTÁCTANOS
                    </Link>
                    <Link
                    className="nav-item"
                    activeClass="active"
                    to="#"
                    spy={true}
                    smooth={true}
                    duration={500}>
                        EVENTO ONLINE
                    </Link> */}
                    <a href="#" className="activo nav-item">INICIO</a>
                    <a href="#info" className="nav-item">¿QUÉ ES JETS?</a>
                    <a href="#galeria" className="nav-item">GALERÍA</a>
                    <a href="#expo" className="nav-item">EXPOSITORES</a>
                    <a href="#contacto" className="nav-item">CONTÁCTANOS</a>
                    <a href="#" className="nav-item">EVENTO ONLINE</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;