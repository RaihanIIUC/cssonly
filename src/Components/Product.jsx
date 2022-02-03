import React from 'react'
import ProductOne from './section2-part-1.jpeg';
import ProductTwo from './section2-part-2.jpeg';
import ProductThree from './section2-part-3.jpeg';

function Product() {
    return (
        <div>
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ProductOne} alt="blog" />
   
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ProductThree} alt="blog" />
         
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ProductTwo} alt="blog" />
        
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}

export default Product
