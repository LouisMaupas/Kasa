import { Component } from 'react'
import data from '../../backend/data.json'
import Thumbnails from '../../components/Thumbnails'
import {Link} from "react-router-dom";
// img
import banner from '../../img/banner.png';
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
      <div className='wrapper'>
        <div className='banner'>
          <div className='banner__text'>Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs.</div>
          <img className='banner__img' src={banner} alt='banner' />
        </div>

        <div className='main-display'>
          {data.length>0?
          data.map(elt => 
          <Link className='thumbnail' key={`lodging-${elt.id}`} to={`/lodging/${elt.id}`}>
            <Thumbnails name={elt.title} ></Thumbnails>
          </Link>)
          :
          <p>Erreur serveur lors du chargement des logements.</p>
          }
        </div>

      </div>
    )
  }

}