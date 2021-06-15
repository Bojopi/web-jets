import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login_Juego from './pages/Login'
import Cronometro from './pages/Cronometro'
import Inicio  from './pages/Inicio'
import Memorias  from './pages/Memorias'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/memorias" component={Memorias}></Route> */}
        {/* <Route exact path="/login-juego" component={Login_Juego}></Route> */}
        <Route exact path="/temporizador" component={Cronometro}></Route>
        <Route exact path="/" component={Inicio}></Route>
      </Switch>
    </Router>
  );
}

export default App;
