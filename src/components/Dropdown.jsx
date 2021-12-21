import React, { Component } from 'react'
// style sheet
import '../Styles/components/_dropdown.scss'

export default class Dropdown extends Component {
    render() {
        const content = this.props.content
        const dropdownTitle = this.props.title
        return (
            <div className='dropdown'>
                <div className='dropdown__header'>
                    {dropdownTitle}
                </div>
                {content}
            </div>
        )
    }
}

