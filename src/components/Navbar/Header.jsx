import React from 'react'

function Header() {
    return (
        <div>
            {/* Nabbar goes here */}

            <nav className="bg-grey-400 text-white ">

                <div className="max-w-7xl border border-red-400">
                    {/* <div className="px-8 border mx-auto border-red-400"> */}

                    {/* <div className="flex justify-center"> */}
                    <div className="flex justify-between">
                        {/* <div className="flex justify-around"> */}

                        {/* primary nav */}
                        <div className="flex items-center space-x-3">
                            <a className="py-5 px-3  text-gray-700" href="">Features</a>
                            <a className="py-5 px-3 text-gray-700" href="">Pricing</a>
                        </div>

                        {/* logo */}
                        <div className="flex space-x-4 hover:bg-purple-200">
                            <div>
                                <a href="" className="flex items-center py-5 px-3 text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="font-bold">Better dev</span>
                                </a>
                            </div>
                            {/* primary nav
                            <div className="flex items-center space-x-3">
                                <a className="py-5 px-3  text-gray-700" href="">Features</a>
                                <a className="py-5 px-3 text-gray-700" href="">Pricing</a>
                            </div> */}
                        </div>
                        {/* secondary nav  */}
                        <div className="flex items-center space-x-1">
                            <a href="" className="py-5 px-3  text-green-700 ">Login</a>
                            <a href="" className="py-5 px-3 bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 rounded transition duration-300 ">Sign Up</a>
                        </div>

                    </div>
                </div>

            </nav>
            {/* mobile menu */}


            {/* content goes here */}

            <div className="py-32 text-center">
                <h2 className="font-extrabold text-6xl">Nabars Tailwind</h2>
            </div>
        </div>
    )
}

export default Header
