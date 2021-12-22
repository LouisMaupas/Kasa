import React, { Component } from 'react'
// img
import logo from '../img/logo_alt.PNG'
// style sheet
import '../Styles/components/_footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <img className='footer__logo' src={logo} alt='logo' />
                </div>
                <div>
                    © 2020 Kasa. All rights reserved
                </div>
            </footer>
        )
    }
}
