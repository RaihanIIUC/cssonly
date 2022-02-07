import React from "react";

import Food from "./Food";

const Identity = () => {
  return (
    <div>
      {/* <div class="  flex  bg-emerald-50  ">

              <div class="w-full   md:w-1/4 px-4 mb-4 md:mb-0">

              </div>
              <div class=" bg-red-600w-full md:w-2/4 px-4 mb-4 md:mb-0"></div>
          </div>

          <div class="  flex  bg-emerald-50 divide-y-8 divide-y-reverse">
              <div class="w-full  md:w-1/3 px-4 mb-4 md:mb-0">
                  
              </div>
              <div class=" bg-red-600w-full md:w-2/3 px-4 mb-4 md:mb-0"></div>
          </div> */}

      <section className="overflow-x-hidden">
        <div className="container mx-auto px-4 divide-y-2 ">
          {/* <h2 className="mb-16 text-4xl md:text-5xl   font-bold font-heading">
            The Most Popular
          </h2> */}
          <div className=" mb-4  -mx-3 opacity-75 text-sm divide-y-2">
            {/* first border text */}
            <div class="flex   md:mb-0 font-bold font-heading items-center justify-center">
              <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">281</div>
              <div class="w-full md:w-1/6 mb-4 md:mb-0">Outlets Nearby</div>
              <div class="w-full md:w-3/4 px-4  md:md-0 "></div>
            </div>
            {/* first border text end  */}

            {/* second divide by border box starts */}

            <div class="flex  md:mb-0  font-bold font-heading  items-center">
              <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">Restaurant</div>
              <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">Medicine</div>
              <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">Groceries</div>
              <div className="w-full md:w-2/4"></div>
            </div>

            {/* second end */}
          </div>

          <Food />
          <Food />
        </div>
      </section>
    </div>
  );
};

export default Identity;
