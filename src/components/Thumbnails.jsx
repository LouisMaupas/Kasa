import React, { Component } from 'react'
// style sheet
import '../Styles/components/_thumbnails.scss'

export default class Thumbnails extends Component {
    render() {
        const name = this.props.name
        return (
            <div className='Thumbnail'>
                <div className='Thumbnail__title'>{name}</div>
            </div>
        )
    }
}
