import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekIncAns2 extends Component {
    render() {
        return(
            <div className='answer'>
                <h2>Try again!</h2>
                <button><Link to={'/greek-quiz2'}>Try again!</Link></button>
            </div>
        )
    }
}

export default GreekIncAns2