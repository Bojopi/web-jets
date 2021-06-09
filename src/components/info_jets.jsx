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
            <div className="tabla">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro1"
                      src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCRONOGRAMA%2FMesa%20de%20trabajo%201%20(mobile).png?alt=media&token=a9d79d9a-befb-447b-8574-79baa665b23e"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <img
                      className="cuadro2"
                      src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCRONOGRAMA%2FMesa%20de%20trabajo%202%20(mobile).png?alt=media&token=efcd9349-fc68-4672-a24f-9ee53bc4b129"
                      alt=""
                    />
                  </div>
                </div>
                {/* <div className="dias">
                  <div>
                    <h1>IMAGEN 3</h1>
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <h1>IMAGEN 4</h1>
                  </div>
                </div> */}
              </Slide>
            </div>
          </div>
          <div className="buttons">
            <Link to="/memorias" className="memorias btn">
              MEMORIAS
            </Link>
            <Link to="/cetificados" className="certificados btn">
              CERTIFICADOS
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Informacion;
