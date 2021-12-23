import React, { Component } from 'react'
import data from '../../backend/data.json'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
// style sheet
import lodging from '../../Styles/pages/_lodging.scss'

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



        return (
          <div>
              <h1>{lodgingData.title}</h1>
              <h2>{lodgingData.location}</h2>
              {lodgingData.tags ?
                    <div className='d-flex'>
                        {lodgingData.tags.map((tag) =>
                    <Tag content={tag}></Tag>
                    )}
                    </div>
                    :
                    <div>
                    </div>
                    }
              <Dropdown title='Description'  content={lodgingData.description} ></Dropdown>
              <Dropdown title='Équipements'  content={lodgingData.equipments} ></Dropdown>
              <div>{lodgingData.rating}</div>
          </div>
        )
      }
}
