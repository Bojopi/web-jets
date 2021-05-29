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
                    Norte en Tecnológico de Monterrey
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={rodrigo} />
                <figcaption>
                  <h3>RODRIGO BARBOZA</h3>
                  <p>C.E.O. Aura Minerals Miami, Florida, Estados Unidos</p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={canales} />
                <figcaption>
                  <h3>RODRIGO CANALES</h3>
                  <p>
                    Associate Professor, Yale School of Management New Haven,
                    Connecticut, Estados Unidos
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
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
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={leonardo} />
                <figcaption>
                  <h3>LEONARDO MARTÍNEZ</h3>
                  <p>Ingeniero en sistemas</p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
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
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={pedro} />
                <figcaption>
                  <h3>PEDRO LOPEZ SAEZ</h3>
                  <p>
                    Profesor de Administración de Empresas en laFacultad de
                    Ciencias Económicas y Empresariales de la Universidad
                    Complutense de Madrid.
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={monica} />
                <figcaption>
                  <h3>MONICA ISABEL MARTINEZ</h3>
                  <p>
                    Master en tecnología educativa. Innovadora certificada por
                    Google, capacitadora de educación de Google y entrenadora
                    global y estudiante líder en Google Innovator Academies.
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            {/* <li>
              <figure>
                <img className="imagen-speaker" src={javier} />
                <figcaption>
                  <h3>Nombre</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi corrupti saepe pariatur aut debitis culpa porro unde
                    repellendus voluptas, deserunt suscipit, tenetur laborum
                    optio nemo neque reiciendis quo nulla eaque hic velit, totam
                    magnam at.
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img className="imagen-speaker" src={javier} />
                <figcaption>
                  <h3>Nombre</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi corrupti saepe pariatur aut debitis culpa porro unde
                    repellendus voluptas, deserunt suscipit, tenetur laborum
                    optio nemo neque reiciendis quo nulla eaque hic velit, totam
                    magnam at.
                  </p>
                  <div className="ver-mas">
                    <p>VER MÁS</p>
                  </div>
                </figcaption>
              </figure>
            </li> */}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Speakers;
