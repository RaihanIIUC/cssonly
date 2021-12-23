import React from 'react'

function CategoryDropBox() {
    return (
        <div className="absolute w-full left-0 top-1/3  bg-white shadow-md py-3">
            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>

        </div>
    )
}

export default CategoryDropBox
