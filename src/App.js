import React, { Fragment } from 'react'

import Header from './components/header'
import Slides from './components/slides'
import Empresas from './components/empresas'
import Footer from './components/footer'
import Informacion from './components/info_jets'
import Galeria from './components/galeria'
import Speakers from './components/speakers'
import Contacto from './components/contacto'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header/>
        <Slides/>
        <Empresas/>
        <Informacion
        id="info"/>
        <Galeria
        id="galeria"/>
        <Speakers
        id="expo"/>
        <Contacto
        id="contacto"/>
        <Footer/>
      </div>
      <div></div>
    </Fragment>
  );
}

export default App;
