import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import InnerImageZoom from "react-inner-image-zoom";

import "../css/info_jets.css";
import "react-slideshow-image/dist/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

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
            Este es un evento de orden regional, nacional e internacional que
            promueve actividades complementarias para la formación integral e
            integradora de nuestros estudiantes y la comunidad a través de
            espacios académicos como conferencias, debates, exposiciones,
            concursos, ferias, foros y actividades culturales que giran en torno
            al emprendimiento y a la innovación. En estos espacios la comunidad
            en general, tiene la oportunidad de compartir las experiencias y
            conocimientos de especialistas nacionales e internacionales,
            generando de esta manera una vinculación entre empresas,
            universidades y representantes del Estado en sus diferentes niveles.
            <br />
            <br />
            Este año se llevará a cabo la décima tercera versión del JETS, con
            el tema central: <b>“Líderes en Emprendimiento”</b>, siendo el
            principal objetivo, potenciar las habilidades, destrezas, actitudes
            y valores de emprendimiento a partir del liderazgo de nuestros
            estudiantes y nuestra comunidad. La fecha del evento será del{" "}
            <b>28 de junio al 2 de julio</b>, las actividades se desarrollarán
            principalmente en línea.
            <br />
            <br />
            Los invitamos a participar del programa para formarse como líderes
            en emprendimiento.
          </p>
        </div>
        <div className="cont-info">
          <div className="cronograma">
            <div className="tabla web">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/pLNQY1Zh/dia-1-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/YqLfFw1B/dia-1-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/KvyB1pD0/dia-2-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/4yvKvZQB/dia-2-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/bJ7bHmcN/dia-2-3-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/WpZ0bcgD/dia-2-4-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/pVjSgBYD/dia-3-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/xCJZjGrV/dia-3-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/Y0QyYpqX/dia-3-3-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/PxgRCLhp/dia-3-4-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/Bnk3MSGq/dia-4-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/qRdTH1RS/dia-4-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
              </Slide>
            </div>

            {/* mobile */}
            <div className="tabla mobile">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/RV2dp0M0/dia-1-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/158MKF1T/dia-1-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/nrW45nDZ/dia-2-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/h4Z1h13w/dia-2-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/8PqdmPGm/dia-2-3-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/TYyqb5zP/dia-2-4-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/zXK1FrcY/dia-3-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/g2KF1KpM/dia-3-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/9Q2Hxn6R/dia-3-3-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/q7MVrCMp/dia-3-4-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/wvK6T6WW/dia-4-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/rmSqDv3q/dia-4-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/10ZesMpdZzEhPWx0dhz0aLNrgsICJ2-Nv/view?usp=sharing"
              className="programa btn"
            >
              PROGRAMA
            </a>
            <Link to={"/jets/memorias"} className="memorias btn">
              MEMORIAS
            </Link>
            <Link to={"/jets/certificados"} className="certificados btn">
              CERTIFICADOS
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Informacion;
