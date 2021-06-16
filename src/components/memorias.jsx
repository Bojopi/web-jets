import React, { Fragment } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../css/memorias.css";

//iconos
import { IconContext } from "react-icons";
import { GiVideoConference } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const Memorias = () => {
  return (
    <Fragment>
      <div className="memorias">
        <div className="top">
          <div className="memoria">
            <figure>
              <img
                src="https://i.postimg.cc/3rzJw50W/presentacion-cienciasempresariales.png"
                alt=""
              />
              <div className="capa">
                <h1>MEMORIAS 2017</h1>
                <div className="btn btnsiete">
                  <Link
                    className="enlace"
                    to="memo-17"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    VER MEMORIA
                  </Link>
                </div>
              </div>
            </figure>
          </div>
          <div className="memoria">
            <figure>
              <img
                src="https://i.postimg.cc/ZRfLRxFZ/fondo-atrapasue-os.png"
                alt=""
              />
              <div className="capa">
                <h1>MEMORIAS 2018</h1>
                <div className="btn btnocho">
                  <Link
                    className="enlace"
                    to="memo-18"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    VER MEMORIA
                  </Link>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className="memoria bottom">
          <figure>
            <img
              src="https://i.postimg.cc/sfQ6n1YX/entrada-casadepapel.jpg"
              alt=""
            />
            <div className="capa">
              <h1>MEMORIAS 2019</h1>
              <div className="btn btnueve">
                <Link
                  className="enlace"
                  to="memo-19"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  VER MEMORIA
                </Link>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div className="memo-17 memo-contenedor" id="memo-17">
        <div className="presentacion">
          <div className="texto">
            <h1>
              MEMORIA <span>JETS 2017</span>
            </h1>
            <p>
              Del 24 de abril al 5 de mayo del 2017, UTEPSA vivió la décima
              versión de las Jornadas Empresariales Tecnológicas y Sociales
              “JETS 2017”. La agenda del evento incluyó 50 actividades entre
              conferencias y talleres impartidos por autoridades y destacados
              profesionales, concursos y exposiciones, con una participación de
              4342 estudiantes.
            </p>
          </div>
          <img
            src="https://i.postimg.cc/R0YLYZqv/presentacion-jets17.png"
            alt=""
          />
        </div>
        <div className="cont-estadistica">
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <HiUserGroup />
              </IconContext.Provider>
              <p>PARTICIPANTES</p>
            </div>
            <div className="cont-participantes textos">
              <div className="cont-opcion">
                <p>Facultad de Ciencias Empresariales:</p>
                <p>Facultad de Ciencias Jurídicas y Sociales:</p>
                <p>Facultad de Ciencias y Tecnología:</p>
              </div>
              <div className="cont-cant">
                <p>1736</p>
                <p>646</p>
                <p>1960</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <GiVideoConference />
              </IconContext.Provider>
              <p>EXPOSITORES</p>
            </div>
            <div className="cont-expositores textos">
              <div className="cont-opcion">
                <p>Locales:</p>
                <p>Nacionales:</p>
                <p>Internacionales:</p>
              </div>
              <div className="cont-cant">
                <p>53</p>
                <p>2</p>
                <p>2</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <FaStar />
              </IconContext.Provider>
              <p>CONCURSOS</p>
            </div>
            <div className="cont-concursos textos">
              <div className="cont-opcion">
                <p>Participantes en concursos:</p>
                <p>Ganadores:</p>
              </div>
              <div className="cont-cant">
                <p>252</p>
                <p>48</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <MdDeveloperMode />
              </IconContext.Provider>
              <p>STARTUP WEEKEND</p>
            </div>
            <div className="cont-startup textos">
              <div className="cont-opcion">
                <p>Participantes:</p>
              </div>
              <div className="cont-cant">
                <p>200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="memo-18 memo-contenedor" id="memo-18">
        <div className="presentacion">
          <div className="texto">
            <h1>
              MEMORIA <span>JETS 2018</span>
            </h1>
            <p>
              Dando inicio a la 11va versión del JETS, se llevó a cabo el acto
              inaugural al que asistieron autoridades de la Universidad, y
              representantes de Instituciones y miembros del Cuerpo Consultar de
              Perú y Argentina. Durante este evento, las autoridades de UTEPSA
              expresaron que el objetivo más importante del JETS es aportar a la
              formación integral de los estudiantes y animaron a toda la
              comunidad a participar activamente del programa preparado. Además,
              un estudiante tomó la palabra en representación de la comunidad
              estudiantil, manifestando el impacto positivo que estas Jornadas
              han tenido durante su formación.
            </p>
          </div>
          <img src="https://i.postimg.cc/NGmr29Kv/2018.png" alt="" />
        </div>
        <div className="cont-estadistica">
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <HiUserGroup />
              </IconContext.Provider>
              <p>PARTICIPANTES</p>
            </div>
            <div className="cont-participantes textos">
              <div className="cont-opcion">
                <p>Facultad de Ciencias Empresariales:</p>
                <p>Facultad de Ciencias Jurídicas y Sociales:</p>
                <p>Facultad de Ciencias y Tecnología:</p>
              </div>
              <div className="cont-cant">
                <p>2059</p>
                <p>369</p>
                <p>1706</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <GiVideoConference />
              </IconContext.Provider>
              <p>EXPOSITORES</p>
            </div>
            <div className="cont-expositores textos">
              <div className="cont-opcion">
                <p>Locales:</p>
                <p>Nacionales:</p>
                <p>Internacionales:</p>
              </div>
              <div className="cont-cant">
                <p>15</p>
                <p>2</p>
                <p>4</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <FaStar />
              </IconContext.Provider>
              <p>CONCURSOS</p>
            </div>
            <div className="cont-concursos textos">
              <div className="cont-opcion">
                <p>Participantes en concursos:</p>
              </div>
              <div className="cont-cant">
                <p>321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="memo-19 memo-contenedor" id="memo-19">
        <div className="presentacion">
          <div className="texto">
            <h1>
              MEMORIA <span>JETS 2019</span>
            </h1>
            <p>
              La Universidad Tecnológica Privada de Santa Cruz – UTEPSA,
              organiza desde hace doce años, las “JORNADAS EMPRESARIALES,
              TECNOLÓGICAS SOCIALES - JETS”; el JETS, es en un evento de alcance
              internacional, que promueve actividades para la formación integral
              de la comunidad, a través de espacios académicos como ser:
              conferencias, debates, exposiciones, concursos e investigación. En
              la gestión 2019, el evento tuvo lugar del 19 al 24 de agosto, la
              agenda incluyó 16 actividades entre conferencias internacionales,
              foros y talleres impartidos por destacados profesionales
              nacionales e internacionales, además se desarrollaron concursos y
              exposiciones, con una participación de 3300 estudiantes de UTEPSA,
              más de una centena de invitados de la comunidad y cerca de 2000
              estudiantes de Unidades Educativas.
            </p>
          </div>
          <img src="https://i.postimg.cc/QCSvCN59/2019.png" alt="" />
        </div>
        <div className="cont-estadistica">
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <HiUserGroup />
              </IconContext.Provider>
              <p>PARTICIPANTES</p>
            </div>
            <div className="cont-participantes textos">
              <div className="cont-opcion">
                <p>Total de Participantes:</p>
              </div>
              <div className="cont-cant">
                <p>3217</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <GiVideoConference />
              </IconContext.Provider>
              <p>EXPOSITORES</p>
            </div>
            <div className="cont-expositores textos">
              <div className="cont-opcion">
                <p>Invitados Externos:</p>
                <p>Nacionales:</p>
                <p>Internacionales:</p>
              </div>
              <div className="cont-cant">
                <p>226</p>
                <p>8</p>
                <p>6</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <FaStar />
              </IconContext.Provider>
              <p>CONCURSOS</p>
            </div>
            <div className="cont-concursos textos">
              <div className="cont-opcion">
                <p>Participantes en concursos:</p>
              </div>
              <div className="cont-cant">
                <p>173</p>
              </div>
            </div>
          </div>
          <div className="card-cont">
            <div className="cont-titu">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <MdDeveloperMode />
              </IconContext.Provider>
              <p>STARTUP WEEKEND</p>
            </div>
            <div className="cont-startup textos">
              <div className="cont-opcion">
                <p>Participantes:</p>
              </div>
              <div className="cont-cant">
                <p>200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Memorias;
