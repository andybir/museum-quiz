import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EgyptIncorrect2 extends Component {
    render() {
        return(
            <div className='quiz'>
                <h2>Try again!</h2>
                <button><Link to={'/egypt-quiz2'}>Try again!</Link></button>
            </div>
        )
    }
}

export default EgyptIncorrect2