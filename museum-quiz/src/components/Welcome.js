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
                <h3 className='greek-font link'><Link to='/greek-art1'>Ancient Greek Culture</Link></h3>
                <Link to='/greek-art1'><img className='culture-img' src={Parthenon} alt='parthenon' /></Link>
                <h3 className='egypt-font link'><Link to='/egypt-art1'>Ancient Egyptian Culture</Link></h3>
                <Link to='/egypt-art1'><img className='culture-img' src={Parthenon} alt='parthenon' /></Link>
                <h3 className='korean-font link'><Link to='/korean-art1'>Ancient Korean Culture</Link></h3>
                <Link to='/korean-art1'><img className='culture-img' src={Parthenon} alt='parthenon' /></Link>
                
            </div>
        )
}

export default Welcome