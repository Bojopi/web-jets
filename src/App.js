import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogIn from './pages/Login'
import Cronometro from './pages/Cronometro'
import Inicio  from './pages/Inicio'
import Memorias  from './pages/Memorias'
import Certificados  from './pages/Certificados'
import UsuariosWeb  from '../src/components/usuariosWeb'
import Online  from './pages/Juego'
import Descargar  from './pages/LectorPDF'

import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './pages/RutaPrivada';

//revisar si existe el token
const token = localStorage.getItem('token')
if(token) {
  tokenAuth(token)
}

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/jets/usuariosWeb" component={UsuariosWeb}></Route>
          <Route exact path="/jets/memorias" component={Memorias}></Route>
          <Route exact path="/jets/certificados" component={Certificados}></Route>
          <Route exact path="/jets/evento" component={LogIn}></Route>
          <Route exact path="/jets/descargar" component={Descargar}></Route>
          <RutaPrivada exact path="/jets/juego" component={Online}></RutaPrivada>
          {/* <Route exact path="/jets/evento" component={Cronometro}></Route> */}
          <Route exact path="/jets/online" component={() => {
            window.location.href = 'https://app-jets.000webhostapp.com/'
            return null
          }}></Route>
          <Route exact path="/jets" component={Inicio}></Route>
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
