import React from 'react'
import BANNER from '../../assets/images/image1.png'
 function Banner() {
    return (
             <div className="row">
          <div className="col_2">
            <h1> Give Your Workout <br />A New Styles
            </h1>
            <p>
              Success isn't always about greatness,It's about consistency.
              Consistency<br />hard work gains success.Greatness will come.
            </p>
            <a href="" className="btn">Explore Now &#8594;</a>
          </div>
            
          <div className="col_2">
            <img src={BANNER} alt="" />
          </div>
        </div>
     )
}

export default Banner
