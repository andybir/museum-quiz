import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class GreekArt1 extends Component {
    constructor() {
        super()
        this.state = {
            artifact: []
        }
    }   

    async componentDidMount() {
        const response = await axios('https://api.harvardartmuseums.org/object/287354?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e')
        const artifact = response.data
        // console.log(artifact)
        const img = response.data.images[0].baseimageurl
        const title = response.data.title
        const text = response.data.labeltext
        this.setState({
          artifact: artifact,
          img: img,
          title: title,
          text: text
        })
      }

    render() {
        return(
            <div className="artifact">
                <h2 className='art-title'>{this.state.title}</h2>
                <img className='art-img' src={this.state.img} alt='Mask of Silenos' />
                <p className='art-text'>{this.state.text}</p>
                {/* <button><Link to='/'>{'Main Menu'}</Link></button> */}
                <button><Link to='greek-quiz1'>{'Quiz Time!'}</Link></button>
            </div>
        )
    }
}

export default GreekArt1