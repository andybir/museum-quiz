import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekCorAns5 extends Component {
    render() {
        return(
            <div>
                <p>correct!</p>
                <button><Link to={'/greek-complete '}>Next Question</Link></button>
            </div>
        )
    }
}

export default GreekCorAns5