import React, { Component } from 'react'
import { Link, NavLink  } from 'react-router-dom'
// style sheet
import server_response from '../../Styles/pages/_server_response.scss'

export default class NotFound extends Component {
    render() {
        return (
            <div className='d-flex flex-column text-center'>
                <span className='http-code'>404</span>
                <span className='server-response'>Oups! La page que vous demandez n'existe pas.</span>
                <NavLink className='return-home' to="/" exact>
                    Retourner sur la page d'accueil
                </NavLink >
            </div>
        )
    }
}
