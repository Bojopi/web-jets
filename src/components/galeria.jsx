import React, { Fragment } from "react";
import { Slide } from "react-slideshow-image";

import "../css/galeria.css";
import "react-slideshow-image/dist/styles.css";

//imagenes
import img1 from "../images/img1.jpg";
import IMG_7748 from '../images/galeria/INAUGURACION/IMG_7748.JPG'
import IMG_7758 from '../images/galeria/INAUGURACION/IMG_7758.JPG'
import IMG_7763 from '../images/galeria/INAUGURACION/IMG_7763.JPG'
import IMG_7778 from '../images/galeria/INAUGURACION/IMG_7778.JPG'
import IMG_7780 from '../images/galeria/INAUGURACION/IMG_7780.JPG'
import IMG_7810 from '../images/galeria/INAUGURACION/IMG_7810.JPG'

import DSC_0002 from '../images/galeria/FORO/DSC_0002.JPG'
import DSC_0014 from '../images/galeria/FORO/DSC_0014.JPG'
import IMG_8348 from '../images/galeria/FORO/IMG_8348.JPG'
import IMG_8382 from '../images/galeria/FORO/IMG_8382.JPG'
import IMG_8384 from '../images/galeria/FORO/IMG_8384.JPG'
import IMG_8387 from '../images/galeria/FORO/IMG_8387.JPG'

import IMG_8396 from '../images/galeria/POSTAS/IMG_8396.JPG'
import IMG_8438 from '../images/galeria/POSTAS/IMG_8438.JPG'
import IMG_8442 from '../images/galeria/POSTAS/IMG_8442.JPG'
import IMG_8488 from '../images/galeria/POSTAS/IMG_8488.JPG'
import IMG_8528 from '../images/galeria/POSTAS/IMG_8528.JPG'
import IMG_8556 from '../images/galeria/POSTAS/IMG_8556.JPG'

import DSC_0008 from '../images/galeria/COLEGIOS/DSC_0008.JPG'
import DSC_0013 from '../images/galeria/COLEGIOS/DSC_0013.JPG'
import DSC_0017 from '../images/galeria/COLEGIOS/DSC_0017.JPG'
import IMG_9207 from '../images/galeria/COLEGIOS/IMG_9207.JPG'
import IMG_9222 from '../images/galeria/COLEGIOS/IMG_9222.JPG'
import IMG_9252 from '../images/galeria/COLEGIOS/IMG_9252.JPG'

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
          <div className="grupo-galeria" id="inauguración">
            <p className="tit-categoria">INAUGURACIÓN</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_7748} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_7758} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_7763} alt="" />
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
                      <img src={IMG_7778} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_7780} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_7810} alt="" />
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
          <div className="grupo-galeria" id="foros">
            <p className="tit-categoria">FOROS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={DSC_0002} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={DSC_0014} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8348} alt="" />
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
                      <img src={IMG_8382} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8384} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8387} alt="" />
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
          <div className="grupo-galeria" id="postas">
            <p className="tit-categoria">POSTAS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8396} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8438} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8442} alt="" />
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
                      <img src={IMG_8488} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8528} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_8556} alt="" />
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
          <div className="grupo-galeria" id="colegios">
            <p className="tit-categoria">VISITAS DE LOS COLEGIOS</p>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img src={DSC_0008} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={DSC_0013} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={DSC_0017} alt="" />
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
                      <img src={IMG_9207} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_9222} alt="" />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img src={IMG_9252} alt="" />
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
