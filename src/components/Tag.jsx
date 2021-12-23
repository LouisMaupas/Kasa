import React, { Component } from 'react'
// style sheet
import '../Styles/components/_tag.scss'

export default class Tag extends Component {
    render() {
        const content = this.props.content
        return (
            <div className='tag mx-1'>
                {content}
            </div>
        )
    }
}
