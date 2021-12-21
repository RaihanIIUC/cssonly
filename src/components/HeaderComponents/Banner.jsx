import React from 'react'
import BANNER from '../../assets/images/image1.png'
function Banner() {
  return (
    <div className="row">

      <div className="col_2">
        <h1>Give your Shop <br /> New Styles </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias quod quas <br /> quibusdam cum maiores pariatur!</p>
        <a href="" className="btn">Explore Now &#8594;</a>

      </div>

      <div className="col_2">
        <img src={BANNER} alt="" />
      </div>
    </div>
  )
}

export default Banner
