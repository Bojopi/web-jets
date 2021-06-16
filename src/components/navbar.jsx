import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import { Link as Enlace, animateScroll as scroll } from "react-scroll";

import "../css/navbar.css";

import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <Enlace
        className="link"
        to="inicio"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        INICIO
      </Enlace>
      <Enlace
        className="link"
        to="info"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        ¿QUÉ ES JETS?
      </Enlace>
      <Enlace
        className="link"
        to="speakers"
        spy={true}
        smooth={true}
        // offset={-150}
        duration={500}
      >
        EXPOSITORES
      </Enlace>
      <Enlace
        className="link"
        to="convocatoria"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        CONVOCATORIAS
      </Enlace>
      <Enlace
        className="link"
        to="galeria"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        GALERÍA
      </Enlace>
      <Enlace
        className="link"
        to="contacto"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        CONTÁCTANOS
      </Enlace>
      <Link to={"/jets/temporizador"} className="entrar-juego link">
        EVENTO ONLINE
      </Link>
      {/* <Enlace
        className="icon"
        spy={true}
        smooth={true}
        duration={500}
        onClick={menu}
      >
        <AiOutlineMenu/>
      </Enlace> */}
    </div>
  );
};

export default Navbar;
