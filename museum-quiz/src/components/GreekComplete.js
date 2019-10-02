import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekComplete extends Component {
    render() {
        return(
            <div className='complete'>
                <h2>You have finished the tour.  Want to explore another culture?</h2>
                <button><Link to={'/'}>Choose a culture</Link></button>
            </div>
        )
    }
}

export default GreekComplete