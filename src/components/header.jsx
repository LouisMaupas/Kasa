import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/components/_header.scss'
import logo from '../img/logo.PNG'
import banner from '../img/banner.svg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='d-flex justify-content-between'>
                    <img className='header__logo' src={logo} alt='Logo' />
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
