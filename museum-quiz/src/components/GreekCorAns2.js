import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns2 extends Component {
    render() {
        return(
            <div className='answer'>
                <p>correct!</p>
                <button><Link to={'/greek-art3'}>Next Artifact</Link></button>
            </div>
        )
    }
}

export default GreekCorAns2