import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns3 extends Component {
    render() {
        return(
            <div>
                <p>correct!</p>
                <button><Link to={'/greek-quiz4 '}>Next Question</Link></button>
            </div>
        )
    }
}

export default GreekCorAns3