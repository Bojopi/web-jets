import React, {useContext, useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link as Enlace,
} from "react-router-dom";

import "../css/online.css";

import AuthContext from "../context/autenticacion/authContext";

const Online = () => {
    let history = useHistory()

    //extraer la información del usuario autenticado
    const authContext = useContext(AuthContext)
    const {usuario, usuarioAutenticado, cerrarSesion} = authContext

    useEffect(() => {
        usuarioAutenticado()
    }, [])

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
              <button className="cerrar-sesion" onClick={() => { cerrarSesion() }}>
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
    </div>
  );
};

export default Online;
