import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EgyptIncorrect4 extends Component {
    render() {
        return(
            <div className='quiz'>
                <h2>Try again!</h2>
                <button><Link to={'/egypt-quiz4'}>Try again!</Link></button>
            </div>
        )
    }
}

export default EgyptIncorrect4