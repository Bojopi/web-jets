import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  );
}

export default App;
