import React from 'react'
import CategoryDropBox from '../Components/CategoryDropBox'

function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                {/* all category  */}
                <div className="px-8 py-4 bg-red-500 flex items-center cursor-pointer relative group ">
                    <span>
                        <i className="fa fa-bars"></i>

                    </span>
                    <span className="capitalize ml-2 text-white">All Categories</span>
                    {/* category dropdown box */}
                    {/* <CategoryDropBox /> */}
                    <div className="absolute w-full left-0 top-full  bg-gray-100  shadow-md py-3 divide-y divide-gray-300  divide-dashed hidden group-hover:block group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>


                    </div>

                </div>

                {/* navbar links */}
                <div className="flex items-center justify-between flex-grow pl-12">

                    <div className="flex items-center space-x-6 capitalize">
                        <a href="" className="text-gray-200 hover:text-white transition">Home</a>
                        <a href="" className="text-gray-200 hover:text-white transition">Shop</a>
                        <a href="" className="text-gray-200 hover:text-white transition">About Us</a>
                        <a href="" className="text-gray-200 hover:text-white transition">Contact Us</a>
                    </div>
                    <a href="" className="text-gray-200 hover:text-white transition">Login /Register</a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
