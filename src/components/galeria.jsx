import React, { Fragment } from "react";

import "../css/galeria.css";

//imagenes
import img1 from "../images/img1.jpg";


const Galeria = () => {
  return (
    <Fragment>
      <div className="galeria">
        <h1>Esta es la galeria</h1>
        <div className="cont-galeria">
          <div className="grupo-galeria" id="ganadores">
            <p className="tit-categoria">GANADORES DE LOS CONCURSOS</p>
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
          </div>
          <div className="grupo-galeria" id="proyectos">
            <p className="tit-categoria">FERIA PROYECTOS</p>
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
          </div>
          <div className="grupo-galeria" id="concursos">
            <p className="tit-categoria">CONCURSOS</p>
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
          </div>
          <div className="grupo-galeria" id="conferencias">
            <p className="tit-categoria">CONFERENCIAS</p>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Galeria;
