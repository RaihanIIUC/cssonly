import React from 'react'
import FeaturedCategory from './FeaturedCategory'
import FeaturedProduct from './FeaturedProduct'
import Offer from './Offer/Offer'
import RecentProduct from './RecentProduct'
 
function Featured() {
    return (
        <div className="categories">

        <div className="small_container">
            <FeaturedCategory />
            <FeaturedProduct />
            <RecentProduct />
         </div>
         <Offer />
        </div>
    )
}

export default Featured
