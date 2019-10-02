import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns2 extends Component {
    render() {
        return(
            <div>
                <p>correct!</p>
                <button><Link to={'/greek-quiz3 '}>Next Question</Link></button>
            </div>
        )
    }
}

export default GreekCorAns2