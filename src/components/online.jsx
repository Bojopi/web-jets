import React, { useContext, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link as Enlace,
} from "react-router-dom";

import "../css/online.css";
import { IoMdCloseCircle } from "react-icons/io";

import AuthContext from "../context/autenticacion/authContext";

const Online = () => {
  let history = useHistory();

  //extraer la información del usuario autenticado
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="cont-juegoOnline">
      <div className="header-juego">
        <div className="titulo-juego">
          <div className="logo-juego">
            <div className="icono-juego">
              <Enlace to={"/jets"} className="entrar-juego link">
                <img
                  src="https://i.postimg.cc/8P5t8X4B/LOGO-JETS-2.png"
                  alt=""
                  onClick={scrollToTop}
                />
              </Enlace>
            </div>
          </div>
          <div className="cont-tit-juego">
            <div className="tit-jets-juego">
              <h1>JETS</h1>
            </div>
            <div className="tit-texto-juego">
              <h3>Jornadas Empresariales, Tecnológicas y Sociales</h3>
            </div>
          </div>
          <div className="cerrar">
            {/* dropdown */}
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                GRABACIONES
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Día 1
                  </a>
                  <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a class="dropdown-item" href="#">
                        Acto de Inauguración
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#foro1">
                        "Liderazgo y nuevos contextos"
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Día 2
                  </a>
                  <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a class="dropdown-item" href="#foro2">
                        "Liderando con responsabilidad e innovación"
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#foro3">
                        "Mujeres líderes en emprendimiento"
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#foro4">
                        "Liderazgo en emprendimiento global"
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a class="dropdown-item" href="#">
                    Submenu
                  </a>
                  <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a class="dropdown-item" href="#">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Submenu item 3
                      </a>
                      <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                        <li>
                          <a class="dropdown-item" href="#">
                            Multi level 1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Multi level 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Submenu item 5
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>

            <button
              className="cerrar-sesion btn btn-dark"
              onClick={() => {
                cerrarSesion();
              }}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      <div className="juego">
        <iframe
          src="https://app-jets.000webhostapp.com/"
          frameborder="0"
          className="juego-capa"
        ></iframe>
      </div>

      {/* ventanas modales */}
      <div id="foro1" className="modal">
        <div className="modal-contenido">
          <a href="#">
            <IoMdCloseCircle />
          </a>
          <iframe src="https://drive.google.com/file/d/1qltBgLNUm-Tm1E-q_lhx-zCVl2J2atjQ/preview" width="640" height="480"></iframe>
        </div>
      </div>
      <div id="foro2" className="modal">
        <div className="modal-contenido">
          <a href="#">
            <IoMdCloseCircle />
          </a>
          <iframe src="https://drive.google.com/file/d/1iU965MIJPPUyEaHcpMwlsQ2u-kcWs15f/preview" width="640" height="480"></iframe>
        </div>
      </div>
      <div id="foro3" className="modal">
        <div className="modal-contenido">
          <a href="#">
            <IoMdCloseCircle />
          </a>
          <iframe src="https://drive.google.com/file/d/1F4bWBuYQYlUSXTu69ixadeJwgRISDmnr/preview" width="640" height="480"></iframe>
        </div>
      </div>
      <div id="foro4" className="modal">
        <div className="modal-contenido">
          <a href="#">
            <IoMdCloseCircle />
          </a>
          <iframe src="https://drive.google.com/file/d/1ydEeY380_hAYft7JaXqkVJxPDLAIZHi2/preview" width="640" height="480"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Online;
