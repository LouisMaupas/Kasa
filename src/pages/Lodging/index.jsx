import React, { Component } from 'react';
import data from '../../backend/data.json';
import Dropdown from '../../components/Dropdown';
import Carrousel from '../../components/Carrousel.jsx';
import Tag from '../../components/Tag';
// Router
import { Redirect } from "react-router-dom";
//img
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

     /**
      * Get lodging data passed in url
      * @returns 
      */
      render() {

        /**
         * Router
         */
        const data = this.state.accomodation
        let lodgingData = {}
        if (data.length) {
          const askedId = this.state.id.slice(1);
          let isIdListed = false;
          for (let lodging of data) { 
            if(lodging.id === askedId) {
              isIdListed = true;
              lodgingData = lodging
            }
          }
          if (!isIdListed) <Redirect to='/404'/>
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
            content.push(<div key={'star-full'+i}><img className='logo-star' alt='rating-star' src={starFull}></img></div>)
          }
          for(let i=0; i<emptyStar; i++) {
            content.push(<div key={'star-empty'+i}><img className='logo-star' alt='rating-star' src={starEmpty}></img></div>)
          }
          return content
        }

        return (
          <div className='wrapper d-flex flex-column'>
            {lodgingData.pictures ? <Carrousel images={lodgingData.pictures} ></Carrousel> : null}
            <div className='lodging-details'>
              <div className='lodging-address'>
                <div className='lodging-title'>{lodgingData.title}</div>
                <div className='lodging-location'>{lodgingData.location}</div>
                {/* Tags */}
                {lodgingData.tags ?
                      <div className='d-flex'>
                          {lodgingData.tags.map((tag, i) =>
                      <Tag key={'tag'+i} content={tag}></Tag>
                      )}
                      </div>
                      : null
                }
              </div>
              <div className='d-flex lodging-infos'>
                <div className='d-flex align-items-center'>
                  {lodgingData.host ? <div className='lodging-host-name'>{lodgingData.host.name}</div>:'error'}
                  {lodgingData.host ? <img className='pp' alt='authors' src={lodgingData.host.picture} />:'error'}
                </div>
                {lodgingData.rating ?
                <div className='stars-wrapper d-flex justify-content-end justify-content-between'>{getRatingStars(lodgingData.rating)}</div>
                : null
                }
              </div>
            </div>
              {/* Dropdowns */}
              <div className='lodging-dropdowns d-flex details'>
                <Dropdown title='Description'  content={lodgingData.description} page={'lodging'} ></Dropdown>
                <Dropdown title='Équipements'  content={lodgingData.equipments} page={'lodging'} ></Dropdown>
              </div>
          </div>
        )
      }
}
