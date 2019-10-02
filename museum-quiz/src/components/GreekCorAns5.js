import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns5 extends Component {
    render() {
        return(
            <div>
                <p>Correct!</p>
                <p>You have finished the tour.  Want to explore another culture?</p>
                <button><Link to={'/'}>Main Menu</Link></button>
            </div>
        )
    }
}

export default GreekCorAns5