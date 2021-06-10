import React, { Fragment } from "react";

import { IoMdCloseCircle } from "react-icons/io";

import "../css/speakers.css";

const Speakers = () => {
  return (
    <Fragment>
      <div className="cont-speakers" id="speakers">
        <h1>SPEAKERS</h1>
        <div className="speakers">
          <ul className="grid style">
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/wTxryJZj/JAVIER-DE-LA-FUENTE.png"
                  alt=""
                />
                <figcaption>
                  <h3>JAVIER DE LA FUENTE</h3>
                  <p>
                    Director Regional del Departamento de Emprendimiento Región
                    Norte en Tecnológico de Monterrey.
                    <a href="#javier">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      <p>Tecnológico de Monterrey</p>
                      <p>Universidad de Cantabria</p>
                    </div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/cCh5k4gW/RODRIGO-BARBOZA.png"
                  alt=""
                />
                <figcaption>
                  <h3>RODRIGO BARBOZA</h3>
                  <p>
                    C.E.O. Aura Minerals Miami, Florida, Estados Unidos
                    <a href="#rodrigo">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      <p>Aura Minerals Inc</p>
                      <p>
                        Universiy of Southern California - Marshall School of
                        Business
                      </p>
                    </div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/0503yZt4/IGNACIO-RUIZ-GUERRA.png"
                  alt=""
                />
                <figcaption>
                  <h3>IGNACIO RUIZ GUERRA</h3>
                  <p>
                    Facultad de Comercio y Turismo Seminario de Organización de
                    Empresas y Marketing PDI Laboral
                    <a href="#ignacio">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      <p>Universidad Complutense de Madrid</p>
                    </div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/C5SQ4fKJ/LEONARDO-MARTINEZ.png"
                  alt=""
                />
                <figcaption>
                  <h3>LEONARDO MARTÍNEZ</h3>
                  <p>
                    Ingeniero en sistemas
                    <a href="#leonardo">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni"></div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/zBmMVQZs/DENNIS-NAKAMURA.png"
                  alt=""
                />
                <figcaption>
                  <h3>DENNIS NAKAMURA</h3>
                  <p>
                    Ingeniero ambiental por Poli-USP - Brasil, especialista en
                    financiamiento de proyectos por FGV.
                    <a href="#dennis">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni"></div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/SsWP8GmJ/PEDRO-LOPEZ-SAEZ.png"
                  alt=""
                />
                <figcaption>
                  <h3>PEDRO LOPEZ SAEZ</h3>
                  <p>
                    Profesor de Administración de Empresas de la Universidad
                    Complutense de Madrid.
                    <a href="#pedro">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      {/* <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p> */}
                    </div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://i.postimg.cc/5tQT9VG5/Monica-Isabel-Martinez.png"
                  alt=""
                />
                <figcaption>
                  <h3>MONICA ISABEL MARTINEZ</h3>
                  <p>
                    Master en tecnología educativa. Innovadora certificada por
                    Google.
                    <a href="#monica">...Leer más</a>
                  </p>
                  <div className="ver-mas">
                    <div className="uni">
                      {/* <img src={TecnologicoDeMonterrey} alt="" />
                      <p>Tecnológico de Monterrey</p>
                      <img src={UniversidadDeCantabria} alt="" />
                      <p>Universidad de Cantabria</p> */}
                    </div>
                    <div className="img">
                      <img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>

      {/* ventanas modales */}
      <div id="javier" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/P5HZSzbm/javier-de-la-fuente.png"
            alt=""
          />
        </div>
      </div>
      <div id="rodrigo" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/CLSrqDZQ/RODRIGO-BARBOSA.png"
            alt=""
          />
        </div>
      </div>
      <div id="ignacio" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/BQpYc6HQ/ignacio-Ruis-guerra.png"
            alt=""
          />
        </div>
      </div>
      <div id="leonardo" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/bYQFrLvn/LEONARDO-MARTINES-1.png"
            alt=""
          />
        </div>
      </div>
      <div id="dennis" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/brjCLSmd/dennis-nakamura1.png"
            alt=""
          />
        </div>
      </div>
      <div id="pedro" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/7hMBRPR9/PEDRO-LOPEZ.png"
            alt=""
          />
        </div>
      </div>
      <div id="monica" className="modal">
        <div className="modal-contenido">
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://i.postimg.cc/y8fGBd8r/MONICA-MARTINEZ.png"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Speakers;
