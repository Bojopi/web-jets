import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login_Juego from './pages/Login'
import Cronometro from './pages/Cronometro'
import Inicio  from './pages/Inicio'
import Memorias  from './pages/Memorias'
import Certificados  from './pages/Certificados'
import UsuariosWeb  from '../src/components/usuariosWeb'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/jets/usuariosWeb" component={UsuariosWeb}></Route>
        <Route exact path="/jets/memorias" component={Memorias}></Route>
        <Route exact path="/jets/certificados" component={Certificados}></Route>
        <Route exact path="/jets/login-juego" component={Login_Juego}></Route>
        <Route exact path="/jets/evento" component={Cronometro}></Route>
        <Route exact path="/jets" component={Inicio}></Route>
      </Switch>
    </Router>
  );
}

export default App;
