import React, { Fragment } from "react";

import "../css/memorias.css";

//iconos
import { IconContext } from "react-icons";
import { GiVideoConference } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

//imagenes
import jets17 from "../images/memorias/jets 2017/presentacion_cienciasempresariales.PNG";
import jets18 from "../images/memorias/jets 2018/fondo_atrapasueños.PNG";
import jets19 from "../images/memorias/jets 2019/entrada_casadepapel.JPG";

//jets 2017
import presentacion from '../images/memorias/jets 2017/presentacion_jets17.PNG'

const Memorias = () => {
  return (
    <Fragment>
      <div className="memorias">
        <div className="top">
          <div className="memoria">
            <figure>
              <img src={jets17} alt="" />
              <div className="capa">
                <h1>MEMORIAS 2017</h1>
                <div className="btn btnsiete">
                  <a href="#memo-17">VER MEMORIA</a>
                </div>
              </div>
            </figure>
          </div>
          <div className="memoria">
            <figure>
              <img src={jets18} alt="" />
              <div className="capa">
                <h1>MEMORIAS 2018</h1>
                <div className="btn btnocho">
                  <a href="#memo-18">VER MEMORIA</a>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className="memoria bottom">
          <figure>
            <img src={jets19} alt="" />
            <div className="capa">
              <h1>MEMORIAS 2019</h1>
              <div className="btn btnueve">
                <a href="#memo-19">VER MEMORIA</a>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div className="memo-17" id="memo-17">
        <div className="presentacion">
          <h1>MEMORIA JETS 2017</h1>
          <img src={ presentacion } alt="" />
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
      <div className="memo-18" id="memo-18">
        <h1>memorias 18</h1>
      </div>
      <div className="memo-19" id="memo-19">
        <h1>memorias 19</h1>
      </div>
    </Fragment>
  );
};

export default Memorias;
