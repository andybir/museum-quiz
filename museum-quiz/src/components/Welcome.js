import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

        return(
            <div>
                <h1>Welcome to Museum Quiz!</h1>
                <h2>Choose collection below</h2>
                <h3><Link to='/artifact1'>Greek Culture</Link></h3>
                {/* <button><img src='https://www.greekboston.com/wp-content/uploads/2016/12/Hephaestus-Temple-Athens.jpg' alt='' style={{width: 300}}/><Link to='/collection'></Link></button> */}
                
            </div>
        )
}

export default Welcome