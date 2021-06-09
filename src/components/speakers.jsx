import React, { Fragment } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { IoMdCloseCircle } from "react-icons/io";

import "../css/speakers.css";

//imagenes
import icono from "../images/ICONO-JETS-ROJO.png";

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
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FJAVIER%20DE%20LA%20FUENTE.png?alt=media&token=6dd767a5-1a4d-46bf-850a-90ebaf4b9247"
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
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FRODRIGO%20BARBOZA.png?alt=media&token=cef348d2-fb30-437f-94b3-c15189089991"
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
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FIGNACIO%20RUIZ%20GUERRA.png?alt=media&token=61f5b215-46ee-4a86-963b-05b417d226b0"
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
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FLEONARDO%20MART%C3%8DNEZ.png?alt=media&token=ea19ad03-40e7-47e9-ae10-689bdd156640"
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
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FDENNIS%20NAKAMURA.png?alt=media&token=686d93cc-5de7-4c7d-91ac-73a806e66610"
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
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FPedro%20L%C3%B3pez%20S%C3%A1ez.png?alt=media&token=ae1fc770-d168-4ee7-8d36-5cca5da728ea"
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
                      <img src={icono} alt="" />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="imagen-speaker"
                  src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/speakers%2FMonica%20Isabel%20Martinez.png?alt=media&token=ea0e8d30-1af5-4066-9411-6dfce941a5fa"
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
                      <img src={icono} alt="" />
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
          {/* <Link
            className="link"
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            INICIO
          </Link> */}
          <a href="#speakers">
            <IoMdCloseCircle />
          </a>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FJAVIER%20DE%20LA%20FUENTE.png?alt=media&token=c14707c1-1898-4790-862f-20dbdf1f2c4e"
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
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FRODRIGO%20BARBOSA.png?alt=media&token=1c948833-721b-4647-883f-4be5440bd1ff"
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
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FIGNACIO%20RUIZ%20GUERRA.png?alt=media&token=59ccb9bc-ad59-4352-b94f-9b1c6be2c409"
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
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FLEONARDO%20MARTINEZ.png?alt=media&token=a0d58970-2234-43e8-9f0f-17c8d29ffc32"
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
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FDENNIS%20NAKAMURA.png?alt=media&token=d21d9821-5b55-4b41-8ba8-609b3cde2ed9"
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
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FPEDRO%20LOPEZ.png?alt=media&token=551dc51a-4032-4594-bfe1-d95f28e17f95"
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
            src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/modals%2FMONICA%20MARTINEZ.png?alt=media&token=feeba5cd-5767-462e-8a24-d8a10447da80"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Speakers;
