import React from 'react'
import Banner from '../Components/Banner'
import HeaderTop from '../Components/HeaderTop'
import MiddlePara from '../Components/MiddlePara'
  import Product from '../Components/Product'
import Navbar from './Navbar'

function Header() {
    return (
        <div>
            <header className="py-4 shadow-sm bg-white">
                <HeaderTop />
            </header>
           <Banner />
           <Product />
           <MiddlePara />
           </div>
    )
}

export default Header
