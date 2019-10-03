import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EgyptArt5 extends Component {
    constructor() {
        super()
        this.state = {
            artifact: []
        }
    }   

    async componentDidMount() {
        const response = await axios('https://api.harvardartmuseums.org/object/303972?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e')
        const artifact = response.data
        // console.log(artifact)
        const img = response.data.images[0].baseimageurl
        const title = response.data.title
        const text = response.data.labeltext
        const commentary = response.data.commentary
        const description = response.data.description
        const context = response.data.contextualtext[0].text
        console.log(context)
        this.setState({
          artifact: artifact,
          img: img,
          title: title,
          text: text,
          commentary: commentary,
          description: description,
          context: context
        })
      }

    render() {
        return(
            <div className="artifact">
                <h2 className='art-title'>{this.state.title}</h2>
                <img className='art-img' src={this.state.img} alt='' />
                <p className='art-text'>{this.state.context}</p>
                {/* <button><Link to='/'>{'Main Menu'}</Link></button> */}
                <button><Link to='egypt-quiz5'>{'Quiz Time!'}</Link></button>
            </div>
        )
    }
}

export default EgyptArt5