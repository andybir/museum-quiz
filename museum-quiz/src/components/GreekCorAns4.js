import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns4 extends Component {
    render() {
        return(
            <div>
                <p>correct!</p>
                <button><Link to={'/greek-quiz5 '}>Next Question</Link></button>
            </div>
        )
    }
}

export default GreekCorAns4