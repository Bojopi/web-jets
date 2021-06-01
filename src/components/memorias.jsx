import React from "react";

import "../css/memorias.css";

//imagenes
import jets17 from "../images/memorias/jets 2017/presentacion_cienciasempresariales.PNG";
import jets18 from "../images/memorias/jets 2018/fondo_atrapasueños.PNG";
import jets19 from "../images/memorias/jets\ 2019/entrada_casadepapel.JPG";

const Memorias = () => {
  return (
    <div className="memorias">
      <div className="top">
        <div className="memoria">
          <figure>
            <img src={jets17} alt="" />
            <div className="capa">
              <h1>MEMORIAS 2017</h1>
              <div className="btn btnsiete">
                <p>VER MEMORIA</p>
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
                <p>VER MEMORIA</p>
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
              <p>VER MEMORIA</p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Memorias;
