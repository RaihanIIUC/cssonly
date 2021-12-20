import React from 'react'
import FPRODUCT1 from '../../assets/images/product-1.jpg';



function RecentProduct() {
    return (
        <div>
            <h2 className="title">Latest Product</h2>
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

        </div>
    )
}

export default RecentProduct
