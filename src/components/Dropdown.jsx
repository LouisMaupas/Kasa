import React, { Component } from 'react'
// style sheet
import '../Styles/components/_dropdown.scss'

export default class Dropdown extends Component {





    render() {
        const content = this.props.content
        console.log(content)
        const dropdownTitle = this.props.title
        
        function triggerDropdown(e) {
            const currentDropdown = e.target.parentNode.parentNode.children[1]
            if (currentDropdown.classList.contains('d-none')) {
                currentDropdown.classList.remove('d-none')
            } else {
                currentDropdown.classList.add('d-none')
            }
        }

        return (
            <div className='dropdown'>
                <div className='dropdown__header d-flex justify-content-between align-items-center'>
                    <span>
                       {dropdownTitle}  
                    </span>
                   <div onClick={triggerDropdown} className='dropdown__trigger dropdown__trigger--closed'>
                       ^
                   </div>
                </div>
                <div className={`dropdown__content d-none`}>

                    {typeof(content) === 'object' ?
                    <ul>
                        {content.map((item) =>
                    <li>{item}</li>
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

