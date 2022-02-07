import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const ProductList = () => {
  console.log("helll");
  return (
    <div>
      <section>
        <div class="pt-12 pb-24 2xl:pb-44 ">
          <div class="container px-4 mx-auto">
            <div class="pb-3 ">
              <div class="relative">
                <div class="absolute left-0 md:mb-0 leading-normal font-heading  text-center  flex flex-row gap-2 border-b  ">
                  <a className="hover:bg-orange-400" href="">Home</a>
                  <h4>></h4>
                  <a className="hover:bg-orange-400" href="">KAVAZO LIMITED</a>
                  <h4>-</h4>
                  <a className="hover:bg-orange-400" href=""> Banani 11</a>
                </div>

              </div>
            </div>
            <div class="flex flex-wrap py-4 mb-3 2xl:mb-10  ">
              <div class="w-full py-2 sm:px-3">
                <div class="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl">
                  <span>
                    <BsSearch className="h-5 w-7 mr-3 text-blue-500" />
                  </span>
                  <input type="text" class="rounded border-none text-pink-500 w-full border-transparent focus:border-transparent focus:ring-0
"  placeholder="please search your food " />

                </div>

              </div>
            </div>
            <div class="flex flex-wrap mb-24 gap-0">

              <div class="order-1 sm:mb-0 sm:w-1/2 lg:w-4/12">
                <h3 className="md:py-4 sm:py-2 px-2 text-left text-2xl font-medium">My Cart</h3>

                <div class="p-10 xl:p-12 xl:pt-10 mb-6 rounded-xl border-4 border-gray-200 ">
                  <p class="flex items-center justify-between text-xl leading-9 font-heading font-medium">
                    <h2 >Tasty Treat</h2>
                    <span class="text-sm text-gray-300">1 month ago</span>
                  </p>
                  
                  <div className="border-2 my-3 border-blue-400"></div>
                  <a
                    class="flex items-center justify-between mb-5 hover:text-darkBlueGray-400 font-heading font-medium"
                    href="#"
                  >
                    <span className="flex flex-col">
                      <p>Smartphone</p>
                      <p className=" text-gray-300">No Tappings</p>
                    </span>
                    <span className="flex flex-row">
                      <span>Tk 250</span>
                      <AiOutlineMinusSquare className="h-5 w-7  text-blue-500" />
                      <p>2</p>
                      <AiOutlinePlusSquare className="h-5 w-7  text-blue-500" />

                    </span>
                    <span class="text-sm text-gray-300">Tk. 267</span>
                  </a>
                  {/* start of the box */}
                  <div className="border-2 border-blue-400"></div>
                  <a
                    class="flex items-center justify-between  hover:text-darkBlueGray-400 font-heading font-medium"
                    href="#"
                  >
                    <span className="text-gray-300 text-md">Food Price</span>
                    <span class="text-sm text-gray-300">Tk.1363</span>
                  </a>
                  <a
                    class="flex items-center justify-between hover:text-darkBlueGray-400 font-heading font-medium"
                    href="#"
                  >
                    <span className="text-gray-300 text-md">Vat</span>
                    <span class="text-sm text-gray-300">Tk.100</span>
                  </a>
                  <a
                    class="flex items-center justify-between hover:text-darkBlueGray-400 font-heading font-medium"
                    href="#"
                  >
                    <span className="text-gray-300 text-md">Deleivary fee</span>
                    <span class="text-sm text-gray-300">Tk.100</span>
                  </a>
                 <div className="border-2 border-blue-400"></div>
                 {/* end of the box */}
                  <a
                    class="flex items-center justify-between my-5 hover:text-darkBlueGray-400 font-heading font-medium"
                    href="#"
                  >
                    <span>Total</span>
                    <span class="text-sm ">Tk. 240</span>
                  </a>
                  <button
                    class="flex w-full  items-center justify-center pb-1 text-xl text-white hover:text-green-600 font-bold tracking-tight border-b rounded-lg bg-orange-500 border-green-600 hover:border-green-700"

                  >
                    Place Order

                  </button>
                </div>
              </div>
              <div class="pr-3 w-full sm:w-1/2 lg:w-8/12">
                <h3 className="md:py-4 sm:py-2 px-2 text-left text-xl  font-medium">Sweet</h3>

                <div class="w-full mb-4 " >
                  <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 rounded-xl border-4 border-gray-200 ">
                    <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                      <a class="block mx-auto max-w-max" href="#">
                        <img
                          className="h-48 object-cover"
                          src="uinel-assets/images/ecommerce-product-list/headphones-sony.png"
                          alt
                        />
                      </a>
                    </div>
                    <div class="xl:w-8/12">
                      <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                        <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-9/12">
                          <a href="#">
                            <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                              Headphones SONY 1l X-O
                            </p>
                            <p class="text-darkBlueGray-400">
                              The nulla commodo, commodo eros a lor, tristique
                              lectus lorem sad 128 GB silver.
                            </p>
                          </a>
                        </div>
                       
                      </div>
                      <div className="border-2 my-3 border-blue-400"></div>

                      <div class="flex flex-wrap items-center">
                        <div class="w-1/2 xl:w-6/12">
                          <div class="flex items-center">
                            <h3 class="mr-4 font-heading font-medium tracking-tighter">
                              Color:
                            </h3>
                            <div class="mr-2 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-white rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-gray-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 xl:w-2/12">
                          <svg
                            class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                            width="27"
                            height="27"
                            viewbox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_476_640)">
                              <path
                                d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                            <defs>
                              <clippath id="clip0_476_640">
                                <rect
                                  width="27"
                                  height="27"
                                  fill="white"
                                ></rect>
                              </clippath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                          <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                            <a
                              class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              href="#"
                            >
                              Add to bag
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mb-4">
                  <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 border-4 border-gray-200 rounded-xl">
                    <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                      <a class="block mx-auto max-w-max" href="#">
                        <img
                          className="h-48 object-cover"
                          src="uinel-assets/images/ecommerce-product-list/iphone-12-pro.png"
                          alt
                        />
                      </a>
                    </div>
                    <div class="xl:w-8/12">
                      <div class="xl:flex sm:justify-between xl:items-start mb-4 xl:mb-20">
                        <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                          <a href="#">
                            <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                              Apple iPhone 12 Pro (128GB) Silver
                            </p>
                            <p class="text-darkBlueGray-400">
                              The nulla commodo, commodo eros a lor, tristique
                              lectus lorem sad 128 GB silver.
                            </p>
                          </a>
                        </div>
                        <div class="xl:pl-3 xl:w-4/12">
                          <div class="flex items-center xl:justify-end">
                            <p class="mr-4 flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                              <span class="mr-2 text-xs">$</span>
                              <span>231.90</span>
                            </p>
                            <p class="relative flex items-center text-base text-gray-300 font-heading font-medium tracking-tighter">
                              <span>$ 231.90</span>
                              <span class="absolute left-1/2 transform -translate-x-1/2 h-px w-16 bg-darkBlueGray-400"></span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center">
                        <div class="w-1/2 xl:w-6/12">
                          <div class="flex items-center">
                            <h3 class="mr-4 font-heading font-medium tracking-tighter">
                              Color:
                            </h3>
                            <div class="p-1 mr-1 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-white border rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 mr-1 max-w-max border border-gray-300 border-opacity-0 rounded-full">
                              <a
                                class="block w-4 h-4 bg-gray-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 mr-1 max-w-max border border-gray-300 border-opacity-0 rounded-full">
                              <a
                                class="block w-4 h-4 bg-darkBlueGray-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 max-w-max border border-gray-300 border-opacity-0 rounded-full">
                              <a
                                class="block w-4 h-4 bg-yellow-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 xl:w-2/12">
                          <svg
                            class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                            width="27"
                            height="27"
                            viewbox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_476_640)">
                              <path
                                d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                            <defs>
                              <clippath id="clip0_476_640">
                                <rect
                                  width="27"
                                  height="27"
                                  fill="white"
                                ></rect>
                              </clippath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                          <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                            <a
                              class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              href="#"
                            >
                              Add to bag
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mb-4">
                  <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 border-4 border-gray-200 rounded-xl">
                    <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                      <a class="block mx-auto max-w-max" href="#">
                        <img
                          className="h-48 object-cover"
                          src="uinel-assets/images/ecommerce-product-list/smartwatch-yellow.png"
                          alt
                        />
                      </a>
                    </div>
                    <div class="xl:w-8/12">
                      <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                        <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                          <a href="#">
                            <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                              Xui Smartwatch YW
                            </p>
                            <p class="text-darkBlueGray-400">
                              The nulla commodo, commodo eros a lor, tristique
                              lectus lorem sad 128 GB silver.
                            </p>
                          </a>
                        </div>
                        <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                          <span class="mr-2 text-xs">$</span>
                          100.90
                        </p>
                      </div>
                      <div class="flex flex-wrap items-center">
                        <div class="w-1/2 xl:w-6/12">
                          <div class="flex items-center">
                            <h3 class="mr-4 font-heading font-medium tracking-tighter">
                              Color:
                            </h3>
                            <div class="mr-2 max-w-max rounded-full">
                              <a
                                class="block w-4 h-4 bg-purple-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-yellow-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 xl:w-2/12">
                          <svg
                            class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                            width="27"
                            height="27"
                            viewbox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_476_640)">
                              <path
                                d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                            <defs>
                              <clippath id="clip0_476_640">
                                <rect
                                  width="27"
                                  height="27"
                                  fill="white"
                                ></rect>
                              </clippath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                          <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                            <a
                              class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              href="#"
                            >
                              Add to bag
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mb-4">
                  <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 border-4 border-gray-200 rounded-xl">
                    <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                      <a class="block mx-auto max-w-max" href="#">
                        <img
                          className="h-48 object-cover"
                          src="uinel-assets/images/ecommerce-product-list/macbook-pro-17.png"
                          alt
                        />
                      </a>
                    </div>
                    <div class="xl:w-8/12">
                      <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                        <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                          <a href="#">
                            <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                              MacBook Pro 17’’
                            </p>
                            <p class="text-darkBlueGray-400">
                              The nulla commodo, commodo eros a lor, tristique
                              lectus lorem sad 128 GB silver.
                            </p>
                          </a>
                        </div>
                        <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                          <span class="mr-2 text-xs">$</span>
                          <span>1999.90</span>
                        </p>
                      </div>
                      <div class="flex flex-wrap items-center">
                        <div class="w-1/2 xl:w-6/12">
                          <div class="flex items-center">
                            <h3 class="mr-4 font-heading font-medium tracking-tighter">
                              Color:
                            </h3>
                            <div class="mr-2 max-w-max rounded-full">
                              <a
                                class="block w-4 h-4 bg-orange-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-gray-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 xl:w-2/12">
                          <svg
                            class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                            width="27"
                            height="27"
                            viewbox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_476_640)">
                              <path
                                d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                            <defs>
                              <clippath id="clip0_476_640">
                                <rect
                                  width="27"
                                  height="27"
                                  fill="white"
                                ></rect>
                              </clippath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                          <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                            <a
                              class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              href="#"
                            >
                              Add to bag
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 border-4 border-gray-200 rounded-xl">
                    <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                      <a class="block mx-auto max-w-max" href="#">
                        <img
                          className="h-48 object-cover"
                          src="uinel-assets/images/ecommerce-product-list/smartwatch-green.png"
                          alt
                        />
                      </a>
                    </div>
                    <div class="xl:w-8/12">
                      <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                        <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                          <a href="#">
                            <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                              Smartwatch Uistore Homme Watch 19
                            </p>
                            <p class="text-darkBlueGray-400">
                              The nulla commodo, commodo eros a lor, tristique
                              lectus lorem sad 128 GB silver.
                            </p>
                          </a>
                        </div>
                        <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                          <span class="mr-2 text-xs">$</span>
                          <span>99.99</span>
                        </p>
                      </div>
                      <div class="flex flex-wrap items-center">
                        <div class="w-1/2 xl:w-6/12">
                          <div class="flex items-center">
                            <h3 class="mr-4 font-heading font-medium tracking-tighter">
                              Color:
                            </h3>
                            <div class="mr-2 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-white rounded-full"
                                href="#"
                              ></a>
                            </div>
                            <div class="p-1 max-w-max border border-gray-300 rounded-full">
                              <a
                                class="block w-4 h-4 bg-gray-400 rounded-full"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 xl:w-2/12">
                          <svg
                            class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                            width="27"
                            height="27"
                            viewbox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_476_640)">
                              <path
                                d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                            <defs>
                              <clippath id="clip0_476_640">
                                <rect
                                  width="27"
                                  height="27"
                                  fill="white"
                                ></rect>
                              </clippath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                          <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                            <a
                              class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              href="#"
                            >
                              Add to bag
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:mx-auto sm:w-96">
              <a
                class="block py-5 px-10 w-full text-xl leading-6 text-body font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                More products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
