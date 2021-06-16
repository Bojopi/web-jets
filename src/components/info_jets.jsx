import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import "../css/info_jets.css";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay: false,
};

const Informacion = () => {
  return (
    <Fragment>
      <div className="info-jets" id="info">
        <div className="historia">
          <h1>¿QUÉ ES JETS?</h1>
          <p>
            La Universidad Tecnológica Privada de Santa Cruz – UTEPSA, organiza
            desde el año 2008 las “JORNADAS EMPRESARIALES, TECNOLÓGICAS SOCIALES
            Y HUMANÍSTICAS - JETS”. 
            <br />
            <br />
            Este es un evento de orden regional, nacional e internacional que promueve 
            actividades complementarias para la formación integral e integradora de nuestros 
            estudiantes y la comunidad a través de espacios académicos como conferencias, debates, 
            exposiciones, concursos, ferias, foros y actividades culturales que giran en torno al 
            emprendimiento y a la innovación. En estos espacios la comunidad en general, tiene la 
            oportunidad de compartir las experiencias y conocimientos de especialistas nacionales e 
            internacionales, generando de esta manera una vinculación entre empresas, universidades y 
            representantes del Estado en sus diferentes niveles. 
            <br />
            <br />
            Este año se llevará a cabo la décima tercera versión del JETS, con el tema central: <b>“Líderes en Emprendimiento”</b>, siendo el principal objetivo, potenciar 
            las habilidades, destrezas, actitudes y valores de emprendimiento a partir del liderazgo 
            de nuestros estudiantes y nuestra comunidad. La fecha del evento será del <b>28 de junio al 2 de julio</b>, 
            las actividades se desarrollarán principalmente en línea.  
            <br />
            <br />
            Los invitamos a participar del programa para formarse como líderes en emprendimiento.
          </p>
        </div>
        <div className="cont-info">
          <div className="cronograma">
            <div className="tabla web">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro1 img"
                      src="https://i.postimg.cc/QtY86kyY/Mesa-de-trabajo-1-3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro2 img"
                      src="https://i.postimg.cc/66c74gfw/Mesa-de-trabajo-2-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro3 img"
                      src="https://i.postimg.cc/TwYYhDW5/Mesa-de-trabajo-3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro4 img"
                      src="https://i.postimg.cc/J4y0bZYb/Mesa-de-trabajo-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro5 img"
                      src="https://i.postimg.cc/j5gqfSzg/Mesa-de-trabajo-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro6 img"
                      src="https://i.postimg.cc/GhZ2zt66/Mesa-de-trabajo-6.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro7 img"
                      src="https://i.postimg.cc/1zK39H4Z/Mesa-de-trabajo-7.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </Slide>
            </div>
            <div className="tabla mobile">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/vHFpCrqN/Mesa-de-trabajo-1-2-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/HW7qSZ2M/Mesa-de-trabajo-2-1-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/K8JJdjKS/Mesa-de-trabajo-1-dia-2-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/65VHfYtQ/Mesa-de-trabajo-2-dia-2-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/Hs1ZMfGK/Mesa-de-trabajo-3-dia-2-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/htS2yTt1/Mesa-de-trabajo-4-dia-2-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/g2yyg97j/Mesa-de-trabajo-1-dia-3-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/fbwcF24K/Mesa-de-trabajo-2-dia-3-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/7ZrM1Pmj/Mesa-de-trabajo-3-dia-3-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/pdqftfRt/Mesa-de-trabajo-4-dia-3-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/k5RKfgKy/Mesa-de-trabajo-1-dia-4-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro"
                      src="https://i.postimg.cc/k4r8ZPyP/Mesa-de-trabajo-2-dia-4-mobile.png"
                      alt=""
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/148b7fKNj-dAJeHu_nU3b1nU4WWkIhOJb/view?usp=sharing" className="programa btn">
              PROGRAMA
            </a>
            <Link to={"/jets/memorias"} className="memorias btn">
              MEMORIAS
            </Link>
            <Link to="/jets" className="certificados btn">
              CERTIFICADOS
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Informacion;
