import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <h3>Museum Quiz</h3>
                <button><Link to={'/'}>Main Menu</Link></button>
            </div>
        )
    }
}

export default Header