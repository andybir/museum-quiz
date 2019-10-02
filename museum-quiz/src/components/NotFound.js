import React from 'react'
import Indy from '../imgs/indiana-jones.jpg'

const NotFound = () => {
    return(
        <div className='answer'>
            <h1>404</h1>
            <h2>This artifact hasn't been unearthed yet...</h2>
            <img className='not-found-img' src={Indy} alt='' />
        </div>
    )
}

export default NotFound