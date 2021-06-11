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
            desde hace doce años, las “JORNADAS EMPRESARIALES, TECNOLÓGICAS
            SOCIALES Y HUMANÍSTICAS - JETS”. Éste es un evento de orden
            internacional que promueve actividades complementarias para la
            formación integral de nuestros estudiantes y la comunidad a través
            de espacios académicos como conferencias, debates, exposiciones,
            concursos, ferias, foros y actividades culturales. Alrededor de 4000
            estudiantes y miembros de la comunidad participan activamente de
            este evento generando espacios para compartir experiencias y
            proyecciones de crecimiento. El evento de este año se ha denominado
            “Formando para Emprender y Servir” y se realizará del 19 al 23 de
            agosto. Lo invitamos a participar de las actividades en este año
            especial en el que UTEPSA cumple 25 años.
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
                      src="https://i.postimg.cc/zvY4ycWL/Mesa-de-trabajo-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro2 img"
                      src="https://i.postimg.cc/zfMsrBGF/Mesa-de-trabajo-2.png"
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
                      className="cuadro1"
                      src="https://i.postimg.cc/X7WwVGQN/Mesa-de-trabajo-1-mobile-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro2"
                      src="https://i.postimg.cc/KvhdxN6K/Mesa-de-trabajo-2-mobile-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro3"
                      src="https://i.postimg.cc/Hnz4GTG9/Mesa-de-trabajo-3-mobile-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="buttons">
            <Link to="/" className="memorias btn">
              MEMORIAS
            </Link>
            <Link to="/" className="certificados btn">
              CERTIFICADOS
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Informacion;
