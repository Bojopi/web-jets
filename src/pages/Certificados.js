import React from 'react';

import Header from '../components/header'
import Certificados from '../components/certificados'
import Footer from '../components/footer'

function Certificado() {
  return (
      <div className="container-memorias">
        <Header/>
        <Certificados/>
        {/* <Footer/> */}
      </div>
  );
}

export default Certificado;
