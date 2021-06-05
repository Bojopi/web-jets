import React, { Fragment } from "react";

import "../css/speakers.css";

//imagenes
import javier from "../images/speakers/JAVIER DE LA FUENTE.png";
import rodrigo from "../images/speakers/RODRIGO BARBOZA.png";
import canales from "../images/speakers/RODRIGO CANALES.png";
import ignacio from "../images/speakers/IGNACIO RUIZ GUERRA.png";
import leonardo from "../images/speakers/LEONARDO MARTÍNEZ.png";
import dennis from "../images/speakers/DENNIS NAKAMURA.png";
import pedro from "../images/speakers/Pedro López Sáez.png";
import monica from "../images/speakers/Monica Isabel Martinez.png";

import icono from "../images/ICONO-JETS-ROJO.png";

import AuraMineralsInc from "../images/universidades/AuraMineralsInc.png";
import MITSloanSchoolOfManagemen from "../images/universidades/MITSloanSchoolOfManagemen.png";
import TecnologicoDeMonterrey from "../images/universidades/TecnologicoDeMonterrey.png";
import UniversidadComplutenseMadrid from "../images/universidades/UniversidadComplutenseMadrid.png";
import UniversidadDeCantabria from "../images/universidades/UniversidadDeCantabria.jpeg";
import UniversityOfSouthernCalifornia from "../images/universidades/UniversityOfSouthernCalifornia.png";
import YaleSchoolOfManagement from "../images/universidades/YaleSchoolOfManagement.png";

const Speakers = () => {
  return (
    <Fragment>
      <div className="cont-speakers">
        <h1>SPEAKERS</h1>
        <div className="speakers">
          <ul className="grid style">
            <li>
              <figure>
                <img className="imagen-speaker" src={javier} />
                <figcaption>
                  <h3>JAVIER DE LA FUENTE</h3>
                  <p>
                    Director Regional del Departamento de Emprendimiento Región
                    Norte en Tecnológico de Monterrey.
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p>
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={rodrigo} />
                <figcaption>
                  <h3>RODRIGO BARBOZA</h3>
                  <p>
                    C.E.O. Aura Minerals Miami, Florida, Estados Unidos
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      <img src={AuraMineralsInc} alt="" />
                      <p>Aura Minerals Inc.</p>
                      <img src={UniversityOfSouthernCalifornia} alt="" />
                      <p>
                        Universiy of Southern California - Marshall School of
                        Business
                      </p>
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={ignacio} />
                <figcaption>
                  <h3>IGNACIO RUIZ GUERRA</h3>
                  <p>
                    Facultad de Comercio y Turismo Seminario de Organización de
                    Empresas y Marketing PDI Laboral
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      <img src={UniversidadComplutenseMadrid} alt="" />
                      <p>Universidad Complutense de Madrid</p>
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={leonardo} />
                <figcaption>
                  <h3>LEONARDO MARTÍNEZ</h3>
                  <p>
                    Ingeniero en sistemas
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      {/* <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p> */}
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={dennis} />
                <figcaption>
                  <h3>DENNIS NAKAMURA</h3>
                  <p>
                    Ingeniero ambiental por Poli-USP - Brasil, especialista en
                    financiamiento de proyectos por FGV.
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      {/* <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p> */}
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li></li>
            <li>
              <figure>
                <img className="imagen-speaker" src={pedro} />
                <figcaption>
                  <h3>PEDRO LOPEZ SAEZ</h3>
                  <p>
                    Profesor de Administración de Empresas de la Universidad
                    Complutense de Madrid.
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      {/* <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p> */}
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li></li>
            <li>
              <figure>
                <img className="imagen-speaker" src={monica} />
                <figcaption>
                  <h3>MONICA ISABEL MARTINEZ</h3>
                  <p>
                    Master en tecnología educativa. Innovadora certificada por
                    Google.
                    <span>...Leer más</span>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      {/* <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p> */}
                    </div>
                    <div className="img">
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Speakers;
