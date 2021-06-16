import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import { Link as Enlace, animateScroll as scroll } from "react-scroll";

import "../css/navbar.css";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <ul className="menu">
        <li className="link">
          <Enlace
            // className="link"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            INICIO
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            // className="link"
            to="info"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            ¿QUÉ ES JETS?
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            // className="link"
            to="speakers"
            spy={true}
            smooth={true}
            // offset={-150}
            duration={500}
          >
            EXPOSITORES
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            // className="link"
            to="convocatoria"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            CONVOCATORIAS
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            // className="link"
            to="galeria"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            GALERÍA
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            // className="link"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            CONTÁCTANOS
          </Enlace>
        </li>
        <li className="link">
          <Link to={"/jets/temporizador"} className="entrar-juego a">
            EVENTO ONLINE
          </Link>
        </li>
        <li className="toggle">
          <Enlace
            spy={true}
            smooth={true}
            duration={500}
          >
            <AiOutlineMenu />
          </Enlace>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
