import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns1 extends Component {
    render() {
        return(
            <div>
                <p>correct!</p>
                <button><Link to={'/greek-art2'}>Next Artifact</Link></button>
            </div>
        )
    }
}

export default GreekCorAns1