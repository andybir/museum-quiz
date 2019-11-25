import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class KoreanCorrect4 extends Component {
    render() {
        return(
            <div className='answer'>
                <h2>Correct!</h2>
                <button><Link to={'/korean-art5'}>Next Artifact</Link></button>
            </div>
        )
    }
}

export default KoreanCorrect4