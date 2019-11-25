import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns5 extends Component {
    render() {
        return(
            <div className='answer'>
                <h2>Correct!</h2>
                <p>You have finished the tour.  Want to explore another culture?</p>
                <button><Link to={'/'}>Choose a culture</Link></button>
            </div>
        )
    }
}

export default GreekCorAns5