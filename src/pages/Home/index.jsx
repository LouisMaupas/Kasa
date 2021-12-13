import { Component } from 'react'
import data from '../../backend/data.json'
import Thumbnails from '../../components/Thumbnails'
import {Link} from "react-router-dom";
// style sheet
import '../../Styles/pages/home.scss'

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
    const data = this.state.accomodation

    return (
      <div className='main-display'>

        {data.length>0?
        data.map(elt => 
        <Link key={`lodging-${elt.id}`} to={`/lodging/${elt.id}`}>
          <Thumbnails name={elt.title} ></Thumbnails>
        </Link>)
      :
        <p>non</p>
        }

        {/*  */}

      </div>
    )
  }

}