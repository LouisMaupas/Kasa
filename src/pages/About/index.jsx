import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown'
// data
import texts from '../../backend/texts.json'
//style sheet
import about from '../../Styles/pages/_about.scss'
//img
import banner from '../../img/about_banner.png';



export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
          texts: {}
        }
      }

    componentDidMount() {
        /**
         * Fetch data from backend to state
         */
         fetch(texts).then(res => {
           if (!res.ok) {
             throw new Error ('HTTP error' + Response.status)
           } else {
             this.setState({ accomodation:texts})
           }
         })
     }

    render() {
        return (
            <div className='text-center'>
                <img className='banner__img mt-4' src={banner} alt='banner' />
                <div className='about__dropdowns d-flex flex-column align-items-center'>
                {texts.length>0?
                  texts.map(elt => 
                            <Dropdown className="my-3" title={`${elt.title}`} key={`${elt.id}`} content={`${elt.content}`}></Dropdown>
                          )
                :
                  <p>Erreur serveur lors du chargement des logements.</p>
                }
              </div>
            </div>
        )
    }
}
