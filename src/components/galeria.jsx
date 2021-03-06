import React, { Fragment } from "react";
import { Slide } from "react-slideshow-image";

import "../css/galeria.css";
import "react-slideshow-image/dist/styles.css";

const properties = {
  // duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay: false,
};

const Galeria = () => {
  return (
    <Fragment>
      <div className="galeria" id="galeria">
        <h1>GALERÍA DE IMÁGENES</h1>
        <div className="cont-galeria">
          <div className="grupo-galeria" id="inauguración">
            <div className="tit-categoria">
              <p>INAUGURACIÓN</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/wxhvXh8q/DSC-0047.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/0ytr6Pg7/DSC-0057.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/qqXvpdXh/DSC-0071.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/kXq5fBqx/DSC-0075.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/4yT3C3tR/DSC-0083.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/pLdLM49r/DSC-0102.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/ZqCnp2Z2/DSC-0126.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/5Ng2Gb2D/DSC-0130.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/Qdnx8m5b/DSC-0139.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/bvDYsn9j/DSC-0140.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/ZR6TLhQ7/DSC-0151.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/hPDSV61s/DSC-0162.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/NFYQJzqg/DSC-0163.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/h4bDzcTh/DSC-0169.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/X7snLL2b/DSC-0170.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/4y5srQsp/DSC-0172.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/rs8LCRxs/DSC-0187.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/4NSrnSLm/DSC-0189.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/NGPNxr1n/DSC-0191.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/xdR5Nkft/DSC-0198.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/15kJkh7c/DSC-0200.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/Hxk2wpjH/DSC-0208.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/s2yK2PrM/DSC-0217.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/JnYQK9BX/DSC-0279.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/vT1tK3WN/DSC-0296.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/7hpnr09Y/DSC-0300.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/Pfc4DnHs/DSC-0304.jpg"
                        alt=""
                      />
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
            <div className="tit-categoria">
              <p>FOROS</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/DfpNGmTQ/DSC-0002.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/mkn6Wpwp/DSC-0014.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/1t5Wn17Y/IMG-8348.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/jjhgSSc7/IMG-8382.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/zBtxT29D/IMG-8384.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/q7rDr3sr/IMG-8387.jpg"
                        alt=""
                      />
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
            <div className="tit-categoria">
              <p>COMPETENCIAS</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/CLHmN1y6/IMG-8396.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/g2gsCT2V/IMG-8438.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/1zTHtV64/IMG-8442.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/zBgkRDS7/IMG-8488.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/s21ms4Mt/IMG-8528.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/g2z4BWmc/IMG-8556.jpg"
                        alt=""
                      />
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
            <div className="tit-categoria">
              <p>VISITAS DE LOS COLEGIOS</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/BbhfLCC2/DSC-0008.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/tJ4LjxHJ/DSC-0013.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/hvZNPtSr/DSC-0017.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.postimg.cc/x1XnmBh8/IMG-9222.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/vHqGcGPC/IMG-9207.jpg"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://i.postimg.cc/t48yN2G5/IMG-9252.jpg"
                        alt=""
                      />
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
