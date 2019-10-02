import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <p>Museum Quiz</p>
                <button><Link to={'/'}>Main Menu</Link></button>
            </div>
        )
    }
}

export default Header