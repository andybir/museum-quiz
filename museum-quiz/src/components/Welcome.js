import React from 'react'
import { Link } from 'react-router-dom'
import Parthenon from '../imgs/ancient-greece.jpg'

const Welcome = () => {

        return(
            <div className='main-menu'>
                <div className='main-menu-headings'>
                <h1>Welcome to Museum Quiz!</h1>
                <h2>Choose collection below</h2>
                </div>
                <h3 className='greek-font'><Link to='/greek-art1'>Greek Culture</Link></h3>
                <Link to='/greek-art1'><img className='parthenon' src={Parthenon} alt='parthenon' /></Link>
                
            </div>
        )
}

export default Welcome