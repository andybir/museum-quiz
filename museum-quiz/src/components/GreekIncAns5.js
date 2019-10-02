import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GreekIncAns5 extends Component {
    render() {
        return(
            <div>
                <p>Try again!</p>
                <button><Link to={'/greek-quiz5'}>Try again!</Link></button>
            </div>
        )
    }
}

export default GreekIncAns5