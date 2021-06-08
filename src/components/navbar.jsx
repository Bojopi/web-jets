import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import { Link as Enlace, animateScroll as scroll } from "react-scroll";

import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Enlace
        className="link"
        activeClass="active"
        to="inicio"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        INICIO
      </Enlace>
      <Enlace
        className="link"
        activeClass="active"
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
        activeClass="active"
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
        activeClass="active"
        to="speakers"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        EXPOSITORES
      </Enlace>
      <Enlace
        className="link"
        activeClass="active"
        to="contacto"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        CONTÁCTANOS
      </Enlace>
      {/* <a href="#" className="activo nav-item">
				INICIO
			</a>
			<a href="#info" className="nav-item">
				¿QUÉ ES JETS?
			</a>
			<a href="#galeria" className="nav-item">
				GALERÍA
			</a>
			<a href="#speakers" className="nav-item">
				EXPOSITORES
			</a>
			<a href="#contacto" className="nav-item">
				CONTÁCTANOS
			</a> */}
      <Link to={"login-juego"} className="entrar-juego">
        EVENTO ONLINE
      </Link>
    </div>
  );
};

export default Navbar;
