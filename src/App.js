import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header'
import Slides from './components/slides'
import Empresas from './components/empresas'
import Footer from './components/footer'
import Informacion from './components/info_jets'
import Galeria from './components/galeria'
import Speakers from './components/speakers'
import Contacto from './components/contacto'
import Login_Juego from './pages/Login'
import Inicio  from './pages/Inicio'
import Memorias  from './pages/Memorias'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/memorias" component={Memorias}></Route>
        <Route exact path="/login-juego" component={Login_Juego}></Route>
        <Route path="/" component={Inicio}></Route>
      </Switch>
    </Router>

    // <Fragment>
    //   <div className="container">
    //     <Header/>
    //     <Slides/>
    //     <Empresas/>
    //     <Informacion/>
    //     <Galeria/>
    //     <Speakers/>
    //     <Contacto/>
    //     <Footer/>
    //   </div>
    // </Fragment>
  );
}

export default App;
