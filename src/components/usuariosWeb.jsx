import React from 'react'
import axios from 'axios'


const UsuariosWeb = () => {
    axios.get('https://api-jets.herokuapp.com/api/userWeb')
        .then((res) => {
            console.log(res.data)
            document.getElementById('listaUsuarios').innerHTML = res.data.userWeb.map((usuario) => {
                return(
                    `<li>
                    ${usuario.name}
                    </li>`
                )
            })
        })
        .catch((error) => {
            console.log(error)
        })
    
    return(
        <div>
            <ul id="listaUsuarios"></ul>
        </div>
    )
}


export default UsuariosWeb