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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Enlace
                className="nav-link active"
                to="inicio"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                INICIO
              </Enlace>
            </li>
            <li class="nav-item">
              <Enlace
                className="nav-link"
                to="info"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                ¿QUÉ ES JETS?
              </Enlace>
            </li>
            <li class="nav-item">
              <Enlace
                className="nav-link"
                to="speakers"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                EXPOSITORES
              </Enlace>
            </li>
            <li class="nav-item">
              <Enlace
                className="nav-link"
                to="universidad"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                INVITADOS
              </Enlace>
            </li>
            <li class="nav-item">
              <Enlace
                className="nav-link"
                to="convocatoria"
                spy={true}
                smooth={true}
                offset={-215}
                duration={500}
              >
                CONVOCATORIAS
              </Enlace>
            </li>
            <li class="nav-item">
              <Enlace
                className="nav-link"
                to="galeria"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                GALERÍA
              </Enlace>
            </li>
            <li class="nav-item">
              <Enlace
                className="nav-link"
                to="contacto"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                CONTÁCTANOS
              </Enlace>
            </li>
            <li class="nav-item">
              <Link to={"/jets/temporizador"} className="entrar-juego nav-link">
                EVENTO ONLINE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className="navbar" id="navbar">
    //   <ul className="menu">
    //     <li className="link">
    //       <Enlace
    //         className="enla"
    //         to="inicio"
    //         spy={true}
    //         smooth={true}
    //         offset={-200}
    //         duration={500}
    //       >
    //         INICIO
    //       </Enlace>
    //     </li>
    //     <li className="link">
    //       <Enlace
    //         className="enla"
    //         to="info"
    //         spy={true}
    //         smooth={true}
    //         offset={-150}
    //         duration={500}
    //       >
    //         ¿QUÉ ES JETS?
    //       </Enlace>
    //     </li>
    //     <li className="link">
    //       <Enlace
    //         className="enla"
    //         to="speakers"
    //         spy={true}
    //         smooth={true}
    //         // offset={-150}
    //         duration={500}
    //       >
    //         EXPOSITORES
    //       </Enlace>
    //     </li>
    //     <li className="link">
    //       <Enlace
    //         className="enla"
    //         to="convocatoria"
    //         spy={true}
    //         smooth={true}
    //         offset={-200}
    //         duration={500}
    //       >
    //         CONVOCATORIAS
    //       </Enlace>
    //     </li>
    //     <li className="link">
    //       <Enlace
    //         className="enla"
    //         to="galeria"
    //         spy={true}
    //         smooth={true}
    //         offset={-150}
    //         duration={500}
    //       >
    //         GALERÍA
    //       </Enlace>
    //     </li>
    //     <li className="link">
    //       <Enlace
    //         className="enla"
    //         to="contacto"
    //         spy={true}
    //         smooth={true}
    //         offset={-150}
    //         duration={500}
    //       >
    //         CONTÁCTANOS
    //       </Enlace>
    //     </li>
    //     <li className="link">
    //       <Link to={"/jets/temporizador"} className="entrar-juego enla">
    //         EVENTO ONLINE
    //       </Link>
    //     </li>
    //     {/* <li className="toggle">
    //       <Enlace
    //         className="enla"
    //         spy={true}
    //         smooth={true}
    //         duration={500}
    //       >
    //         <AiOutlineMenu />
    //       </Enlace>
    //     </li> */}
    //   </ul>
    // </div>
  );
};

export default Navbar;
