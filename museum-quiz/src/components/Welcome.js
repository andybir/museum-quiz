import React from 'react'
import { Link } from 'react-router-dom'
import Parthenon from '../imgs/ancient-greece.jpg'
import Sphinx from '../imgs/sphinx-pyramid.jpg'
import Palace from '../imgs/Changdeokgung.jpg'

const Welcome = () => {

        return(
            <div className='welcome'>
                <div className='main-menu-headings'>
                <h1>Welcome to Museum Quiz!</h1>
                <h2>Choose a culture below</h2>
                </div>
                <div className='culture-choices'>
                <div className='culture-button'>   
                <h3 className='greek-font link'><Link to='/greek-art1'>Ancient Greek Culture</Link></h3>
                <Link to='/greek-art1'><img className='culture-img' src={Parthenon} alt='parthenon' /></Link>
                </div>
                <div className='culture-button'>
                <h3 className='egypt-font link'><Link to='/egypt-art1'>Ancient Egyptian Culture</Link></h3>
                <Link to='/egypt-art1'><img className='culture-img' src={Sphinx} alt='parthenon' /></Link>
                </div>
                <div className='culture-button'>
                <h3 className='korean-font link'><Link to='/korean-art1'>Classical Korean Culture</Link></h3>
                <Link to='/korean-art1'><img className='culture-img' src={Palace} alt='parthenon' /></Link>
                </div>
                </div>
            </div>
        )
}

export default Welcome