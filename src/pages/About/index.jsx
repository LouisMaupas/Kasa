import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown'
// data
import texts from '../../backend/texts.json'
//img
import banner from '../../img/about_banner.png';



export default class About extends Component {

    render() {
        return (
            <div className='text-center'>
                <img className='banner__img mt-4' src={banner} alt='banner' />
                <div className='about__dropdowns d-flex flex-column align-items-center'>
                {texts.length>0?
                  texts.map(elt => 
                            <Dropdown className="my-3" title={`${elt.title}`} key={`${elt.id}`} content={`${elt.content}`} page={'about'}></Dropdown>
                          )
                :
                  <p>Erreur serveur lors du chargement des logements.</p>
                }
              </div>
            </div>
        )
    }
}
