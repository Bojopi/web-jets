import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { 
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState)

    //las funciones
    
    //retornar el usuario autenticado
    const usuarioAutenticado = async() => {
        const token = localStorage.getItem('token')
        if (token) {
            //TODO: funcion para enviar el toke por headers
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth')
            // console.log(respuesta)
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos)
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })

            //obtener el usuario
            usuarioAutenticado()
        } catch (error) {
            console.log(error.response.data.msg)
            // console.log(error)
            // alert('El usuario no existe')
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }
    
    //retornar el usuario autenticado
    const usuarioAutenticadoPdf = async() => {
        const token = localStorage.getItem('token')
        if (token) {
            //TODO: funcion para enviar el toke por headers
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('/api/pdf')
            // console.log(respuesta)
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //cuando el usuario inicia sesion
    const iniciarSesionPdf = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/pdf', datos)
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })

            //obtener el usuario
            usuarioAutenticadoPdf()
        } catch (error) {
            console.log(error.response.data.msg)
            // console.log(error)
            // alert('El usuario no existe')
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //cerrar la sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
        
    }

    //descargar el pdf

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                iniciarSesion,
                usuarioAutenticado,
                usuarioAutenticadoPdf,
                iniciarSesionPdf,
                cerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
