import React from 'react'
import banner from './banner.jpeg';


function Banner() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto flex items-center md:flex-row flex-col">
                    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                     <img src={banner} alt="" />
                       </div>
                  
                </div>
            </section>
        </div>
    )
}

export default Banner
