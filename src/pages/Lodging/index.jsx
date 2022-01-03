import React, { Component } from 'react'
import data from '../../backend/data.json'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
// style sheet
import lodging from '../../Styles/pages/_lodging.scss'
//img
import starFull from '../../img/star_full.png';
import starEmpty from '../../img/star_empty.png';
import arrowLeft from '../../img/arrow_left.png';
import arrowRight from '../../img/arrow_right.png';


export default class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
          accomodation: {},
          id: this.props.match.params[0]
        }
      }

    /**
     * Fetch data from backend to state
     */
    componentDidMount() {
         fetch(data).then(res => {
           if (!res.ok) {
             throw new Error ('HTTP error' + Response.status)
           } else {
             this.setState({ accomodation:data})
           }
         })
     }
      render() {
        const data = this.state.accomodation
        let lodgingData = {}
        if (data.length) {
          for (let lodging of data) {
            lodging.id === this.state.id.slice(1) ? lodgingData = lodging : console.log('pass')
          }
        }

        /**
         * Display rating stars
         * @param {*} score 
         * @returns 
         */
        const getRatingStars = score => {
          let content = []
          let emptyStar = 5
          for(let i=0; i<score; i++) {
            emptyStar -= 1;
            content.push(<div key={'star'+i}><img src={starFull}></img></div>)
          }
          for(let i=0; i<emptyStar; i++) {
            content.push(<div key={'star'+i}><img src={starEmpty}></img></div>)
          }
          return content
        }

        /**
         * Handle carrousel's img
         * @param {*} index 
         * @param {*} direction 
         */
        const carrouselTranslate = (index, direction) => {
          console.log(index, direction)
        }

        return (
          <div className='wrapper d-flex flex-column'>
            {/* carrousel */}
            <div className='carrousel mb-2'>
              <div className='slides'>
                {lodgingData.pictures ? 
                    lodgingData.pictures.map((pic, i) =>
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
            <div className='d-flex justify-content-between'>
              <div>
                <div className='lodging-title'>{lodgingData.title}</div>
                <div className='lodging-location'>{lodgingData.location}</div>
                {/* Tags */}
                {lodgingData.tags ?
                      <div className='d-flex'>
                          {lodgingData.tags.map((tag, i) =>
                      <Tag key={'tag'+i} content={tag}></Tag>
                      )}
                      </div>
                      : <div></div>
                }
              </div>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center'>
                  {lodgingData.host ? <div className='lodging-host-name'>{lodgingData.host.name}</div>:'error'}
                  {lodgingData.host ? <img className='pp' src={lodgingData.host.picture} />:'error'}
                </div>
                {lodgingData.rating ?
                <div className='d-flex justify-content-end justify-content-between'>{getRatingStars(lodgingData.rating)}</div>
                :
                <div></div>
                }
              </div>
            </div>
              {/* Dropdowns */}
              <div className='d-flex justify-content-between mt-4 details'>
                <Dropdown title='Description'  content={lodgingData.description} ></Dropdown>
                <Dropdown title='Équipements'  content={lodgingData.equipments} ></Dropdown>
              </div>
          </div>
        )
      }
}
