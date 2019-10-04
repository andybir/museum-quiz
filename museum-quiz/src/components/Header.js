import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <Link to={'/'}><h3 className='header-title'>Museum Quiz</h3></Link>
                <button><Link to={'/greek-art1'}>Greek</Link></button>
                <button><Link to={'/egypt-art1'}>Egyptian</Link></button>
                <button><Link to={'/korean-art1'}>Korean</Link></button>
            </div>
        )
    }
}

export default Header