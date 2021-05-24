import React, { Fragment } from "react";

import { ImLocation } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

import "../css/contacto.css";
import ubicacion from "../images/utepsa_ubicacion.png";

const Contacto = () => {
  return (
    <Fragment>
      <div className="contenedor-contacto">
        <div className="info-contacto">
          <h1>CONT&Aacute;CTANOS</h1>
          <img src={ubicacion} alt="" />
          <div className="info-texto">
            <ImLocation />
            <p>
              Dirección: 3er Anillo Interno N° 715, entre Busch y Av. San Martín
            </p>
            <ImPhone />
            <p>Teléfono: (591 - 3) 363-9213</p>
            <MdEmail />
            <p>Email: jets@utepsa.edu</p>
            <CgWebsite />
            <p>Website: www.utepsa.edu</p>
          </div>
        </div>
        <div className="form-contacto">
          <p className="text-info">
            Ante cualquier duda o consulta puedes enviarnos tus comentarios
            mediante el siguiente formulario, todos los campos son necesarios.
          </p>
          <div className="form-info">
              <input type="text" id="nombre" placeholder="Nombre Completo:"/>
              <input type="email" id="email" placeholder="Correo Electrónico:"/>
              <input type="text" id="mensaje" placeholder="Mensaje:"/>
              <button type="submit">ENVIAR</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacto;
