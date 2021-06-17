import React, { Fragment } from "react";
import emailjs from 'emailjs-com'

import { ImLocation } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

import "../css/contacto.css";

const Contacto = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    // const nombre = document.getElementById('name')
    // const correo = document.getElementById('email')
    // const mensaje = document.getElementById('message')

    emailjs.sendForm('service_efdlz8h', 'template_71ab3rs', e.target, 'user_frZYFUT1O6bOlc5RBRWUk')
    .then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })
    e.target.reset()
  }

  return (
    <Fragment>
      <div className="contenedor-contacto" id="contacto">
        <div className="info-contacto">
          <h1>CONT&Aacute;CTANOS</h1>
          <img src="https://i.postimg.cc/Xv7vxF4J/MAPA-UTEPSA.png" alt="" />
          <div className="info-texto">
            <ImLocation />
            <p className="inf-jets">
              Dirección: 3er Anillo Interno N° 715, entre Busch y Av. San Martín
            </p>
            <ImPhone />
            <p className="inf-jets">Teléfono: (591 - 3) 363-9213</p>
            <MdEmail />
            <p className="inf-jets">Email: jets@utepsa.edu</p>
            <CgWebsite />
            <p className="inf-jets">Website: www.utepsa.edu</p>
          </div>
        </div>
        <div className="form-contacto">
          <div className="cont-formulario">
            <p className="text-info">
              Ante cualquier duda o consulta puedes enviarnos tus comentarios
              mediante el siguiente formulario, todos los campos son necesarios.
            </p>
            <form className="form-info" onSubmit={sendEmail}>
                <input type="text" id="nombre" name="name" placeholder="Nombre Completo:"/>
                <input type="email" id="email" name="email" placeholder="Correo Electrónico:"/>
                <input type="text" id="mensaje" name="message" placeholder="Mensaje:"/>
                <button type="submit">ENVIAR</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacto;
