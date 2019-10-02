import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns1 extends Component {
    render() {
        return(
            <div className='answer'>
                <h2>Correct!</h2>
                <button><Link to={'/greek-art2'}>Next Artifact</Link></button>
            </div>
        )
    }
}

export default GreekCorAns1