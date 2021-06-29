import React, {useContext, useEffect} from 'react'


import Header from '../components/header'
import Online from '../components/online'
import AuthContext from '../context/autenticacion/authContext'

function Juego() {

    //extraer la informacion del usuario autenticado
    const authContext = useContext(AuthContext)
    const { usuarioAutenticado } = authContext

    useEffect(() => {
        usuarioAutenticado()
    }, [])

  return (
      <div>
          <Online />
      </div>
  )
}

export default Juego;
