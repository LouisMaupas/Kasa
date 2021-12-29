import React, { Component } from 'react'
import data from '../../backend/data.json'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
// style sheet
import lodging from '../../Styles/pages/_lodging.scss'
//img
import carrouselOne from '../../img/carrousel_one.png';
import carrouselTwo from '../../img/carrousel_two.png';
import carrouselThree from '../../img/carrousel_three.png';
import starFull from '../../img/star_full.png';
import starEmpty from '../../img/star_empty.png';

export default class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
          accomodation: {},
          id: this.props.match.params[0]
        }
      }

    componentDidMount() {
        /**
         * Fetch data from backend to state
         */
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

        const getRatingStars = score => {
          let content = []
          let emptyStar = 5
          for(let i=0; i<score; i++) {
            emptyStar -= 1;
            content.push(<div key={i}><img src={starFull}></img></div>)
          }
          for(let i=0; i<emptyStar; i++) {
            content.push(<div key={i}><img src={starEmpty}></img></div>)
          }
          return content
        }
        console.log(getRatingStars(lodgingData.rating))

        return (
          <div className='wrapper d-flex flex-column'>
            <div className='carrousel-left'> G </div>
            <div className='carrousel-right'> D </div>
            <div className='carrousel mb-2'>
              <div className='slides'>
                {lodgingData.pictures ? 
                  <div className="slide">
                    {lodgingData.pictures.map((pic, i) =>
                      <img src={pic} alt='banner' />
                      )}
                  </div> 
                  : <div>Erreur pas de réseau internet.</div>
                }
              </div>
            </div>

            <div className='d-flex justify-content-between'>
              <div>
                <div className='lodging-title'>{lodgingData.title}</div>
                <div className='lodging-location'>{lodgingData.location}</div>
                {lodgingData.tags ?
                      <div className='d-flex'>
                          {lodgingData.tags.map((tag, i) =>
                      <Tag key={i} content={tag}></Tag>
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
              <div className='d-flex justify-content-between mt-4'>
                <Dropdown title='Description'  content={lodgingData.description} ></Dropdown>
                <Dropdown title='Équipements'  content={lodgingData.equipments} ></Dropdown>
              </div>
          </div>
        )
      }
}
