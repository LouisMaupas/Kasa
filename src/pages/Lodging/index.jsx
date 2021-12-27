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
          let emptyStar = 5
          for(let i=0; i<score; i++) {
            emptyStar -= 1;
            <div key={i}>Full</div>
          }
          for(let i=0; i<emptyStar; i++) {
            <div key={i}>Empty</div>
          }
        }
        console.log(getRatingStars(lodgingData.rating))



        return (
          <div className='wrapper d-flex flex-column'>


            <div className='carrousel'>
              <div className='slides'>
                <div className='carrousel-left'> G </div>
                <div className='carrousel-right'> D </div>
                <div className="slide"><img src={carrouselOne} alt='banner' /></div>
                <div className="slide"><img src={carrouselTwo} alt='banner' /></div>
                <div className="slide"><img src={carrouselThree} alt='banner' /></div>
              </div>
            </div>

            <div className='d-flex'>
              <div>
              <h1>{lodgingData.title}</h1>
              <h2>{lodgingData.location}</h2>
              {lodgingData.tags ?
                    <div className='d-flex'>
                        {lodgingData.tags.map((tag, i) =>
                    <Tag key={i} content={tag}></Tag>
                    )}
                    </div>
                    :
                    <div>
                    </div>
              }
            </div>
              <div>
                <div>lodgingData.host</div>
                début
                {lodgingData.rating ?
                <div>{getRatingStars(lodgingData.rating)}</div>
                :
                <div></div>
                }
                fin
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
