import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";
import { BsSearch, BsFillBadge4KFill, BsMinecartLoaded } from "react-icons/bs";
import { AiTwotoneBell } from "react-icons/ai";
import { FaCoins, FaUserAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <section>
        <nav className="relative py-6 bg-white shadow-2xl">
          <div className="container mx-auto px-4 flex items-center">
            <ul className="hidden lg:flex lg:w-1/3 lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li>
                <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                  Deliver To
                </a>
              </li>
              <li className="text-gray-300">
                <MdLocationOn className="h-5 w-5 text-blue-500" />
              </li>
              <li>
                <a className="text-sm text-green-600 font-bold" href="#">
                  Current Location:
                </a>
              </li>

              <li>
                <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                  Dhaka Cantonment
                </a>
              </li>

              <li className="text-gray-300">
                <MdOutlineKeyboardArrowDown className="h-5 w-5 text-blue-500" />
              </li>
            </ul>
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
              <a className="text-3xl font-bold leading-none" href="#">
                <img src="images/logo-primary-e6f0682.svg" alt width={100} />
              </a>
            </div>
            <div className="hidden lg:ml-auto lg:block lg:w-1/3 text-right">
              <a
                className="hidden lg:inline-block lg:ml-auto lg:mr-2 py-2  bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                <BsSearch className="h-5 w-5 text-blue-500" />
              </a>
              <a
                className="hidden lg:inline-block py-2  lg:mr-2 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                <AiTwotoneBell className="h-5 w-5 text-blue-500" />
              </a>

              <a
                className="hidden lg:inline-block py-2  lg:mr-2 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                <FaCoins className="h-5 w-5 text-blue-500" />
              </a>
              <a
                className="hidden lg:inline-block py-2 lg:mr-2   hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                <BsMinecartLoaded className="h-5 w-5 text-blue-500" />
              </a>
              <a
                className="hidden lg:inline-block py-2  lg:mr-2 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                <FaUserAlt className="h-5 w-5 text-blue-500" />
              </a>
            </div>
            <div className="lg:hidden ml-auto">
              <button className="navbar-burger flex items-center text-green-600 p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img src="images/logo-primary-e6f0682.svg" alt width={100} />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Deliver To
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    <MdLocationOn />
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                  href="#"
                >
                  Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>© 2020 All rights reserved.</span>
              </p>
              <div className="text-center">
                <a className="inline-block px-1" href="#">
                  <img src="atis-assets/social/facebook.svg" alt />
                </a>
                <a className="inline-block px-1" href="#">
                  <img src="atis-assets/social/twitter.svg" alt />
                </a>
                <a className="inline-block px-1" href="#">
                  <img src="atis-assets/social/instagram.svg" alt />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
