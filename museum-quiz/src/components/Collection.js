import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Collection extends Component {
    constructor() {
        super()
        this.state = {
            artifact: []
        }
    }   

    async componentDidMount() {
        const response = await axios('https://api.harvardartmuseums.org/object/287354?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e')
        const artifact = response.data
        console.log(artifact)
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
        console.log(this.state.artifact)
        return(
            <div>
                <h2>{this.state.title}</h2>
                <img src={this.state.img} alt='' style={{width: 300}}/>
                <p>{this.state.text}</p>
                <button>Next</button>
            </div>
        )
    }
}

export default Collection