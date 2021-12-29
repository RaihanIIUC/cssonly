import React from 'react'

function HeaderTop() {
    return (
        <div className="container flex  items-center justify-between">

            {/* logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className=" w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>

            {/* searchbar */}

            <div className="flex  relative max-w-xl w-full">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa fa-search"></i>
                </span>
                <input type="text" className="w-full border border-red-400 border-r-0 pl-12 py-3 rounded-l-md focus:outline-none" />
                <button className="bg-red-400 border border-red-200 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-500 transition">Search</button>

            </div>

            {/* icons */}

            <div className="flex items-center space-x-4">

                <a href="" className="text-center text-gray-700 hover:text-red-500 transition relative ">
                    <div className="text-2xl">
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="text-xs leading-3 ">Wish List</div>
                    <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center  justify-center bg-red-500 text-whte text-xs ">8</span>
                </a>
                <a href="" className="text-center text-green-500 hover:text-red-500 transition relative ">
                    <div className="text-2xl">
                        <i className="fa fa-shopping-bag">
                        </i>
                    </div>

                    <div className="text-xs leading-3">Cart</div>
                    <span className="absolute -right-3 top-1 w-5 h-5 rounded-full flex items-center justify-content bg-red-500 text-white text-xs">8</span>

                </a>

                <a href="" className="text-center text-green-500 hover:text-red-500 transition relative ">
                    <div className="text-2xl">
                        <i className="fa fa-user">
                        </i>
                    </div>

                    <div className="text-xs leading-3">Account</div>
                </a>            </div>

        </div>

    )
}

export default HeaderTop
