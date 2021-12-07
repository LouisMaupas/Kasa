import { Component } from 'react'
import data from '../../backend/data.json'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      accomodation: {}
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
    console.log(this.state.accomodation)
    return (
      
      <div>
        <h1>Début</h1>
        <h1>Fin</h1>
      </div>
    )
  }

}