import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

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
              



      <section className="relative    overflow-x-hidden">
        <div className="relative container mx-auto px-4">
          {/* <h2 className="mb-16 text-4xl md:text-5xl   font-bold font-heading">
            The Most Popular
          </h2> */}
                  <div className=" mb-4  -mx-3">
                      {/* first border text */}
                      <div class="flex   md:mb-0 divide-y-reverse divide-y font-bold font-heading ">
                          <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">281</div>
                          <div class="w-full md:w-1/10 mb-4 md:mb-0">Outlets Nearby</div>
                          <div class="w-full md:w-3/4 md:md-0 "></div>
                      </div>
                      {/* first border text end  */}

                      {/* second divide by border box starts */}

                      <div class="flex  md:mb-0 divide-y divide-y-reverse font-bold font-heading ">
                          <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">Restaurant</div>
                          <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">Medicine</div>
                          <div class="w-full md:w-1/12 px-4 mb-4 md:mb-0">Groceries</div>
                          <div className="w-full md:w-2/4"></div>
                      </div>

                      {/* second end */}
          </div>

          
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0">
              <a className="block mb-10" href>
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover"
                    src="images/sausly-s-cover-1637130769640.jpeg"
                    alt
                  />
                </div>
                <div className="mt-12">
                  <div className="mb-2 flex items-center justify-center md:mb-0">
                    <div className="md:w-1/4 px-4 mb-4 md:mb-0 flex items-center justify-center w-16 h-16   rounded-5xl shadow-sm">
                      <img
                        className=" rounded-lg"
                        src="images/north-end-coffee-roasters-logo-1629873428586.png"
                        alt
                      />
                    </div>

                    <div class="w-full md:w-2/4 px-4 mb-4 md:mb-0">
                      <h3 className="mb-3 text-3xl text-black font-bold font-heading truncate">
                        Salimar Garden Restora - Banani
                      </h3>
                      <p className="text-xl font-bold font-heading  ">
                        <span>$295.30</span>
                        <span className="text-xs text-gray-500 font-semibold font-heading">
                          $330.90
                        </span>
                      </p>
                    </div>
                    <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0 flex flex-row">
                      <AiFillStar className="h-5 w-5 text-orange-400" />
                      <p>3.6/5</p>
                    </div>
                  </div>
                </div>
              </a>
{/* last sub box starts */}
              <div className="flex md:mb-0">
                <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0 flex gap-2">
                  <BsFillHeartFill className="h-5 w-5 text-orange-400" />
                  <p>134</p>
                </div>
                <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                  <a
                    className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                    href="#"
                  >
                    PRE ORDER
                  </a>
                </div>
              </div>
            </div>
            {/* box1 end and box2 starts */}
            <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0">
              <a className="block mb-10" href="#">
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover"
                    src="images/salimar-garden-restora-cover-1637819180270.jpeg"
                    alt
                  />
                </div>
                <div className="mt-12">
                  <div className="mb-2 flex items-center justify-center md:mb-0">
                    <div className="md:w-1/4 px-4 mb-4 md:mb-0 flex items-center justify-center w-16 h-16   rounded-5xl shadow-sm">
                      <img
                        className=" rounded-lg"
                        src="images/kismot-hotel-logo-1615275308138.jpg"
                        alt
                      />
                    </div>

                    <div class="w-full md:w-2/4 px-4 mb-4 md:mb-0">
                      <h3 className="mb-3 text-3xl   font-bold font-heading truncate">
                        Kismot Biriyani - Banani
                      </h3>
                      <p className="text-xl font-bold font-heading  ">
                        <span>$32.30</span>
                        <span className="text-xs text-gray-500 font-semibold font-heading">
                          $49.90
                        </span>
                      </p>
                    </div>
                    <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0 flex flex-row">
                      <AiFillStar className="h-5 w-5 text-orange-400" />
                      <p>3.6/5</p>
                    </div>
                  </div>
                </div>
              </a>
                          {/* last sub box starts */}
                          <div className="flex md:mb-0">
                              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0 flex gap-2">
                                  <BsFillHeartFill className="h-5 w-5 text-orange-400" />
                                  <p>134</p>
                              </div>
                              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                                  <a
                                      className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                                      href="#"
                                  >
                                      PRE ORDER
                                  </a>
                              </div>
                          </div>
                      </div>
            <div className="w-full lg:w-1/3 px-3">
              <a className="block mb-10" href="#">
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover"
                    src="images/bhagyakul-mistanna-bhander-cover-1627624115083.jpeg"
                    alt
                  />
                </div>
                <div className="mt-12">
                  <div className="mb-2 flex items-center justify-center md:mb-0">
                    <div className="md:w-1/4 px-4 mb-4 md:mb-0 flex items-center justify-center w-16 h-16   rounded-5xl shadow-sm">
                      <img
                        className=" rounded-lg"
                        src="images/kismot-biriyani-logo-1631100622885.jpeg"
                        alt
                      />
                    </div>

                    <div class="w-full md:w-2/4 px-4 mb-4 md:mb-0">
                      <h3 className="mb-3 text-3xl   font-bold font-heading truncate">
                        North End Coffee Roasters - Banani (BORAK MEHENUR TOWER)
                      </h3>
                      <p className="text-xl font-bold font-heading  ">
                        <span>$295.30</span>
                        <span className="text-xs text-gray-500 font-semibold font-heading">
                          $330.90
                        </span>
                      </p>
                    </div>
                    <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0 flex flex-row">
                      <AiFillStar className="h-5 w-5 text-orange-400" />
                      <p>3.6/5</p>
                    </div>
                  </div>
                </div>
              </a>
                          {/* last sub box starts */}
                          <div className="flex md:mb-0">
                              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0 flex gap-2">
                                  <BsFillHeartFill className="h-5 w-5 text-orange-400" />
                                  <p>134</p>
                              </div>
                              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                                  <a
                                      className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                                      href="#"
                                  >
                                      PRE ORDER
                                  </a>
                              </div>
                          </div>
                      </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Identity;
