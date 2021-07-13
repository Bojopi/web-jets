import React, { useContext, useEffect } from "react";
import PdfContext from '../context/autenticacion/authContext'

import { jsPDF } from 'jspdf'

import "../css/lector.css";


const Descargar = () => {

  //Extraer la info del usuario
  const pdfContext = useContext(PdfContext)
	const { usuario, usuarioAutenticado } = pdfContext

  useEffect(() => {
    usuarioAutenticado()
  }, [])

  const doc = new jsPDF()
  doc.html(document.body, {
    callback: (doc) => {
      doc.save()
    },
    x: 10,
    y: 10
  })

  return (
    <div className="fondo" id="fon">
        <img className="imagen" />
            {usuario ? <h1 className="nomUsuario">{usuario.name} {usuario.lastname}</h1> : null}
    </div>
  );
};

export default Descargar;
