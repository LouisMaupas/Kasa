import React, { Component } from 'react'
// style sheet
import '../Styles/components/_dropdown.scss'
// img
import arrowBottom from '../img/arrow_bottom.png';

export default class Dropdown extends Component {

    render() {
        const content = this.props.content
        const dropdownTitle = this.props.title
        const page = this.props.page

        function triggerDropdown(e) {
            e.stopPropagation();
            const dropdownHeader = e.currentTarget
            const dropdownContent = dropdownHeader.parentElement.children[1]
            if (dropdownContent.classList.contains('d-none')) {
                dropdownContent.classList.remove('d-none')
            } else {
                dropdownContent.classList.add('d-none')
            }
        }

        return (
            <div className={`dropdown dropdown--${page}`}>
                <div onClick={triggerDropdown} className='dropdown__header d-flex justify-content-between align-items-center'>
                    <span>
                       {dropdownTitle}  
                    </span>
                   <div className='dropdown__trigger dropdown__trigger--closed'>
                    <img className='dropdown-arrow' src={arrowBottom} alt='clickable dropdown'></img>
                   </div>
                </div>
                <div className='dropdown__content'>

                    {typeof(content) === 'object' ?
                    <ul>
                        {content.map((item, i) =>
                    <li key={i}>{item}</li>
                    )}
                    </ul>
                    :
                    <div>
                        {content}
                    </div>
                    }

                </div>
            </div>
        )
    }
}

