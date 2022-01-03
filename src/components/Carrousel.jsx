import React, { Component } from 'react'
// style sheet
import '../Styles/components/_carrousel.scss'
//img
import arrowLeft from '../img/arrow_left.png';
import arrowRight from '../img/arrow_right.png';

export default class Carrousel extends Component {

    

    render() {

        /**
         * Handle carrousel's img
         * @param {*} index 
         * @param {*} direction 
         */
        const carrouselTranslate = (index, direction) => {
            return console.log(index, direction)
        }

        const images = this.props.images

        return (
            <div className='carrousel mb-2'>
                <div className='slides'>
                    {images ? 
                        images.map((pic, i) =>
                            <div>
                                <div key={'arrow-left-'+i} onClick={carrouselTranslate(i, 'left')} className='carrousel-left carrousel-arrows'><img key={'arrow-left-img-'+i} src={arrowLeft}/></div>
                                <div key={'arrow-right-'+i} onClick={carrouselTranslate(i, 'right')} className='carrousel-right carrousel-arrows'><img key={'arrow-left-img-'+i} src={arrowRight}/></div>
                                <img className='carrousel-img slide' key={'carrousel-img-'+i} src={pic} alt='banner' />
                            </div>  
                        )
                        : <div>Erreur pas de réseau internet.</div>
                    }
                </div>
            </div>
        )
    }
}

