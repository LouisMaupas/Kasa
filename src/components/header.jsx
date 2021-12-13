import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </div>
        )
    }
}
