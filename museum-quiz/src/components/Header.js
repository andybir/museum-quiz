import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div>
                <button><Link to={'/'}>Main Menu</Link></button>
            </div>
        )
    }
}

export default Header