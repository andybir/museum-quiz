import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekComplete extends Component {
    render() {
        return(
            <div className='complete'>
                <h2>Great job! Explore another culture?</h2>
                <button><Link to={'/'}>Main Menu</Link></button>
            </div>
        )
    }
}

export default GreekComplete