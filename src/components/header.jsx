import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// img
import logo from '../img/logo.PNG'
import banner from '../img/banner.svg'
// style sheet
import '../Styles/components/_header.scss'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='d-flex justify-content-between'>
                    <Link to="/">
                        <img className='header__logo' src={logo} alt='Logo' />
                    </Link>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/about">A propos</Link>
                    </nav>  
                </div>
                <img className='header__banner' src={banner} alt='banner' />
            </div>
        )
    }
}
