import React from 'react';

import Header from '../components/header'
import Memorias from '../components/memorias'
import Footer from '../components/footer'

function Inicio() {
  return (
      <div className="container-memorias">
        <Header/>
        <Memorias/>
        <Footer/>
      </div>
  );
}

export default Inicio;
