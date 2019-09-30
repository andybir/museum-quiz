import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Collection extends Component {

    render() {
        return(
            <div>
                <h2>{this.state.title}</h2>
                <img src={this.props.img} alt='' style={{width: 300}}/>
                <p>{this.state.text}</p>
                <button>Next</button>
            </div>
        )
    }
}

export default Collection