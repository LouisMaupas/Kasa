import React, { Component } from 'react'
import data from '../../backend/data.json'

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
        return (
          <div>
              <h1>Logement n°{this.state.id}</h1>
          </div>
        )
      }
}
