import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/components/_header.scss'

const logo = require('../public/logo.png')

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='Logo' />
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </div>
        )
    }
}
