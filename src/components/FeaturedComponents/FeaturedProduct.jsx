import React from 'react'
import FPRODUCT1 from '../../assets/images/product-1.jpg';
import RecentProduct from './RecentProduct';
 
function FeaturedProduct() {
    return (<>
             <h2 className="title">Featured Product</h2>
            <div className="row">
                <div className="col_4">
                    <img src={FPRODUCT1} alt="" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>     <div className="col_4">
                    <img src={FPRODUCT1} alt="" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>  <div className="col_4">
                    <img src={FPRODUCT1} alt="" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>  <div className="col_4">
                    <img src={FPRODUCT1} alt="" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
 
        </>
    )
}

export default FeaturedProduct
