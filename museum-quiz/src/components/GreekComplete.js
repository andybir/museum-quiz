import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekComplete extends Component {
    render() {
        return(
            <div>
                <p>Great job! Explore another culture?</p>
                <button><Link to={'/'}>Home</Link></button>
            </div>
        )
    }
}

export default GreekComplete