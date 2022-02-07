import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

const Food = () => {
  return <div>
      {/* flex for  fodd box  */}
      <div className="flex flex-wrap -mx-3 my-5">
          {/* f;exfood 1 starts */}
          <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0 hover:shadow-xl hover:translate-x-1">
              <a className="block mb-10" href>
                  <div className="relative">
                      <img
                          className="w-full   object-cover"
                          src="images/sausly-s-cover-1637130769640.jpeg"
                          alt
                      />
                  </div>
                  <div className="mt-12">
                       <div className="mb-2 flex items-center justify-center md:mb-0">
                       
                          <div className="md:w-1/5   mb-4 md:mb-0 flex  
                          w-16 h-16   rounded-5xl  ">
                              <img
                                  className=" rounded-lg"
                                  src="images/north-end-coffee-roasters-logo-1629873428586.png"
                                  alt="food" 
                              />
                          </div>

                          <div class="w-full md:w-8/12 mb-4 md:mb-0">
                              <h3 className="mb-3 text-xl text-[#292f48] opacity-75 font-bold font-heading truncate">
                                  Salimar Garden Restora - Banani
                              </h3>
                              <p className="text-xl font-bold font-heading  ">
                                  <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                      Bengali
                                  </span>
                                  <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                      Indian
                                  </span>
                                  <span className="text-xs  px-1 text-gray-500 font-semibold font-heading">
                                      Kababi
                                  </span>
                              </p>
                          </div>
                          <div class="w-full md:w-1/6 mb-4 md:mb-0 flex flex-row divide-y-reverse">
                              <AiFillStar className="h-5 w-5 text-orange-400" />
                              <p>3.6/5</p>
                          </div>
                      </div>
                  </div>
              </a>
              {/* last sub box starts */}
              <div className="flex md:mb-0">
                  <div class="w-full md:w-1/6 md:mb-0 flex items-center gap-2">
                      <BsFillHeartFill className="h-5 w-5 text-teal-300" />
                      <p>134</p>
                  </div>
                  <div className="md:w-8/12"></div>
                  
                  <div class="w-full md:w-1/5 md:mb-0">
                      <a
                          className="inline-block font-bold font-heading rounded-md transition duration-200"
                          href="#"
                      >
                          Tk.244
                      </a>
                  </div>
              </div>
          </div>

          {/* box1 end and box2 starts */}
          <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0 hover:shadow-xl hover:translate-x-1">
              <a className="block mb-10" href="#">
                  <div className="relative">
                      <img
                          className="w-full   object-cover"
                          src="images/salimar-garden-restora-cover-1637819180270.jpeg"
                          alt="food"  
                      />
                  </div>
                  <div className="mt-12">
                      <div className="mb-2 flex items-center justify-center md:mb-0">
                          <div className="md:w-1/5 mb-4 md:mb-0 flex w-16 h-16   rounded-5xl">
                              <img
                                  className=" rounded-lg"
                                  src="images/kismot-hotel-logo-1615275308138.jpg"
                                  alt
                              />
                          </div>

                          <div class="w-full md:w-8/12  mb-4 md:mb-0">
                              <h3 className="mb-3 text-xl text-[#292f48]  opacity-75 font-bold font-heading truncate">
                                  Kismot Biriyani - Banani
                              </h3>
                              <p className="text-xl font-bold font-heading  ">
                                  <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                      Bengali
                                  </span>
                                  <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                      Indian
                                  </span>
                                  <span className="text-xs  px-1 text-gray-500 font-semibold font-heading">
                                      Kababi
                                  </span>
                              </p>
                          </div>
                          <div class="w-full md:w-1/6 mb-4 md:mb-0 flex flex-row">
                              <AiFillStar className="h-5 w-5 text-orange-400" />
                              <p>3.6/5</p>
                          </div>
                      </div>
                  </div>
              </a>
              {/* last sub box starts */}
              <div className="flex md:mb-0">
                  <div class="w-full md:w-1/6 md:mb-0 flex gap-2 items-center">
                      <BsFillHeartFill className="h-5 w-5 text-orange-400" />
                      <p>134</p>
                  </div>

                  <div className='md:w-8/12'></div>
                  <div class="w-full md:w-1/5 md:mb-0">
                      <a
                          className="inline-block font-bold font-heading rounded-md transition duration-200"
                          href="#"
                      >
                          Tk.200
                      </a>
                  </div>
              </div>
          </div>
          {/* box3 starts and box2 end */}
          <div className="w-full lg:w-1/3 px-3 hover:shadow-xl hover:translate-x-1">
              <a className="block mb-10" href="#">
                  <div className="relative">
                      <img
                          className="w-full   object-cover"
                          src="images/bhagyakul-mistanna-bhander-cover-1627624115083.jpeg"
                          alt
                      />
                  </div>
                  <div className="mt-12">
                      <div className="mb-2 flex items-center justify-center md:mb-0">
                          <div className="md:w-1/5   mb-4 md:mb-0 flex w-16 h-16   rounded-5xl shadow-sm">
                              <img
                                  className=" rounded-lg"
                                  src="images/kismot-biriyani-logo-1631100622885.jpeg"
                                  alt
                              />
                          </div>

                          <div class="w-full md:w-8/12  mb-4 md:mb-0">
                              <h3 className="mb-3 text-xl text-[#292f48] opacity-75  font-bold font-heading truncate">
                                  North End Coffee Roasters - Banani (BORAK MEHENUR TOWER)
                              </h3>
                              <p className="text-xl font-bold font-heading  ">
                                   <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                     Bengali 
                                  </span>
                                   <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                     Indian 
                                  </span>
                                  <span className="text-xs  px-1 text-gray-500 font-semibold font-heading">
                                      Kababi
                                  </span>
                              </p>
                          </div>
                          <div class="w-full md:w-1/6 mb-4 md:mb-0 flex flex-row">
                              <AiFillStar className="h-5 w-5 text-orange-400" />
                              <p>3.6/5</p>
                          </div>
                      </div>
                  </div>
              </a>
              {/* last sub box starts */}
              <div className="flex md:mb-0">
                  <div class="w-full md:w-1/6 md:mb-0 flex gap-2 items-center">
                      <BsFillHeartFill className="h-5 w-5 text-orange-400" />
                      <p>134</p>
                  </div>
                  <div className='md:w-8/12'>

                  </div>
                  <div class="w-full md:w-1/5 md:mb-0">
                      <a
                          className="inline-block font-bold font-heading rounded-md transition duration-200"
                          href="#"
                      >
                          Tk : 100
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>;
};

export default Food;
