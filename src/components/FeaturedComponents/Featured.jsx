import React from 'react'
import FeaturedCategory from './FeaturedCategory'
import FeaturedProduct from './FeaturedProduct'

function Featured() {
    return (
        <div className="categories">

            <div className="small_container">
                <FeaturedCategory />
            </div>

            <div className="small_container">
                <FeaturedProduct />
            </div>

        </div>
    )
}

export default Featured
