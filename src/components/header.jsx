import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// img
import logo from '../img/logo.PNG'
// style sheet
import '../Styles/components/_header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className='wrapper' id='wrapper-header'>
                <div className='d-flex justify-content-between'>
                    <Link to="/">
                        <img className='header__logo' src={logo} alt='Logo' />
                    </Link>
                    <nav className='header__nav'>
                        <Link to="/">Accueil</Link>
                        <Link to="/about">A propos</Link>
                    </nav>  
                </div>
            </div>
        )
    }
}
