import React from 'react'
 import Banner from './Banner' 
import Navbar from './Navbar'

 function Header() {
    return (
        <div className='header'>

            <div className="container">
                <Navbar />
                <Banner />

            </div>
        </div>
    )
}

export default Header
                