import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='about__dropdowns'>
                    <Dropdown title='Fiabilité'></Dropdown>
                    <Dropdown title='Respect'></Dropdown>
                    <Dropdown title='Service'></Dropdown>
                    <Dropdown title='Responsabilité'></Dropdown>
              </div>
            </div>
        )
    }
}
