import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/components/_header.scss'
import logo from '../img/logo.PNG'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='header__logo' src={logo} alt='Logo' />
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </div>
        )
    }
}
