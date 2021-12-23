import React from 'react'
import HeaderTop from '../Components/HeaderTop'
import Navbar from './Navbar'

function Header() {
    return (
        <div>
            <header className="py-4 shadow-sm bg-white">
                <HeaderTop />
            </header>

            <Navbar />
        </div>
    )
}

export default Header
