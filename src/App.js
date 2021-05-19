import React, { Fragment } from 'react'

import Header from './components/header'
import Slides from './components/slides'
import Empresas from './components/empresas'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header/>
        <Slides/>
        <Empresas/>
      </div>
      <div></div>
    </Fragment>
  );
}

export default App;
