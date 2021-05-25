import React, { Fragment } from "react";
import { Slide } from "react-slideshow-image";

import "../css/galeria.css";
import "react-slideshow-image/dist/styles.css";

//imagenes
import img1 from "../images/img1.jpg";

const properties = {
  // duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,
};

const Galeria = () => {
  return (
    <Fragment>
      <div className="galeria">
        <h1>GALERIA DE IMAGENES</h1>
        <div className="cont-galeria">
          <div className="grupo-galeria" id="ganadores">
            <p className="tit-categoria">GANADORES DE LOS CONCURSOS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="grupo-galeria" id="proyectos">
            <p className="tit-categoria">FERIA PROYECTOS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="grupo-galeria" id="conferencias">
            <p className="tit-categoria">CONFERENCIAS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="grupo-galeria" id="competencias">
            <p className="tit-categoria">COMPETENCIAS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Galeria;
