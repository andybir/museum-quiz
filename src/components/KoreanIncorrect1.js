import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class KoreanIncorrect1 extends Component {
    render() {
        return(
            <div className='quiz'>
                <h2>Try again!</h2>
                <button><Link to={'/korean-quiz1'}>Try again!</Link></button>
            </div>
        )
    }
}

export default KoreanIncorrect1