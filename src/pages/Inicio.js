import React, { Fragment } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from '../components/header'
import Navbar from '../components/navbar'
import Slides from '../components/slides'
import Empresas from '../components/empresas'
import Footer from '../components/footer'
import Informacion from '../components/info_jets'
import Galeria from '../components/galeria'
import Speakers from '../components/speakers'
import Contacto from '../components/contacto'
import Convocatorias from '../components/convocatorias'
import Universidades from '../components/universidades'
import Inscripcion from '../components/inscripcion'

function Inicio() {
  return (
    <Fragment>
        <Header/>
        <Navbar/>
        <Slides/>
        <Informacion/>
        <Speakers/>
        <Universidades />
        <Empresas/>
        <Convocatorias/>
        <Galeria/>
        <Contacto/>
        <Inscripcion />
        <Footer/>
    </Fragment>
  );
}

export default Inicio;
