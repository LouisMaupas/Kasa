import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown'
//style sheet
import about from '../../Styles/pages/_about.scss'
//img
import banner from '../../img/about_banner.png';



export default class About extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className='banner__img' src={banner} alt='banner' />
                <div className='about__dropdowns d-flex flex-column align-items-center'>
                    <Dropdown title='Fiabilité'></Dropdown>
                    <Dropdown title='Respect'></Dropdown>
                    <Dropdown title='Service'></Dropdown>
                    <Dropdown title='Responsabilité'></Dropdown>
              </div>
            </div>
        )
    }
}
