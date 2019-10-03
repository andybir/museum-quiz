import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class KoreanIncorrect4 extends Component {
    render() {
        return(
            <div className='quiz'>
                <h2>Try again!</h2>
                <button><Link to={'/korean-quiz4'}>Try again!</Link></button>
            </div>
        )
    }
}

export default KoreanIncorrect4