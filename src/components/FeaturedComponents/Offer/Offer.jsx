import React from 'react'
import OFFER from '../../../assets/images/exclusive.png';

function Offer() {
    return (
        <div className="offer">
            <div className="small_container">
                <h2 className="title">Featured Category</h2>
                <div className="row">
                    <div className="col_2">
                        <img src={OFFER} className="offer_img" alt="offer" />
                    </div>

                    <div className="col_2">
                        <p>Exclusive Availability on Red Hat</p>
                        <h1>Smart Brand</h1>
                        <small>Lorem ipsum ipsum natus facilis, inventore corrupti molestiae suscipit obcaecati quisquam commodi animi, consequatur accusantium expedita.</small>
                        <a href="" className="btn">Explore&#8594;</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer
