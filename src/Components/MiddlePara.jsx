import React from 'react'

function MiddlePara() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
               
                    <div class="flex flex-col md:w-1/2 md:pl-12 border-y-4 border-gray-400 w-full">
                           <nav class="flex flex-wrap list-none -mb-1">
                            <li class="lg:w-1/3 mb-1 w-1/2">
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li class="lg:w-1/3 mb-1 w-1/2">
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li class="lg:w-1/3 mb-1 w-1/2">
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MiddlePara
