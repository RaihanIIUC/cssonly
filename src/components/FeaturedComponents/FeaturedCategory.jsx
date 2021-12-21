import React from 'react'
import CATEGORY1 from '../../assets/images/category-1.jpg';
import CATEGORY2 from '../../assets/images/category-2.jpg';
import CATEGORY3 from '../../assets/images/category-3.jpg';




function FeaturedCategory() {
    return (
        <div>
            <h2 className="title">Featured Category</h2>

            <div className="row">
                <div className="col_3">
                    <img src={CATEGORY1} alt="" />
                </div>

                <div className="col_3">
                    <img src={CATEGORY2} alt="" />
                </div>

                <div className="col_3">
                    <img src={CATEGORY3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategory
