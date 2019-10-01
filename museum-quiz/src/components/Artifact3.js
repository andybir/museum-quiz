import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Artifact3 extends Component {
    constructor() {
        super()
        this.state = {
            artifact: []
        }
    }   

    async componentDidMount() {
        const response = await axios('https://api.harvardartmuseums.org/object/167822?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e')
        const artifact = response.data
        console.log(artifact)
        const img = response.data.images[0].baseimageurl
        const title = response.data.title
        const text = response.data.labeltext
        const commentary = response.data.commentary
        const description = response.data.description
        // const details = response.data.details.technical[1].text
        this.setState({
          artifact: artifact,
          img: img,
          title: title,
          text: text,
          commentary: commentary,
          description: description,
        //   details: details
        })
      }

    render() {
        console.log(this.state.artifact)
        return(
            <div>
                <h2>{this.state.title}</h2>
                <img src={this.state.img} alt='' style={{width: 300}}/>
                <p>{this.state.commentary}</p>
                <button><Link to='artifact4'>{'Next'}</Link></button>
            </div>
        )
    }
}

export default Artifact3