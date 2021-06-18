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
                      src="https://i.postimg.cc/QdcpDzQ7/dia-1-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/zXsn9Ng5/dia-1-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/c6yr5s5b/dia-2-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/PfLyc2RW/dia-2-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/J79xWZf9/dia-2-3-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/J4Zq7tmt/dia-2-4-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/8C2cCkTP/dia-3-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/Sxtjw759/dia-3-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/6pQyj1Hw/dia-3-3-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/RVTYRksv/dia-4-1-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/28YJnkxH/dia-4-2-web.png"
                      moveType="drag"
                    />
                  </div>
                </div>
              </Slide>
            </div>
            <div className="tabla mobile">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/3NWXHJ1r/dia-1-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/yx5F64pm/dia-1-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/9XNPYZXD/dia-1-3-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/MpJQ9YCp/dia-2-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/QMXW3dxL/dia-2-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/Y90GvDWb/dia-2-3-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/nL09cfCX/dia-2-4-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/HLRc749m/dia-3-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/sxRMTjL0/dia-3-2-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/BbcXkW9Z/dia-3-3-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/hjmJ8z2d/dia-3-4-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/hGvNh20c/dia-4-1-mobile.png"
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <InnerImageZoom
                      src="https://i.postimg.cc/GmcWnL8B/dia-4-2-mobile.png"
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
              href="https://drive.google.com/file/d/1LSFi7mbFxl7Aq2fZCirkAtbM9j_KNT3E/view?usp=sharing"
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
