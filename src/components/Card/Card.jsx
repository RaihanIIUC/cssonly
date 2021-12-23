import React from 'react'
import Partition from './Partition'

function Card() {
    return (
        <div>
            <section className="m-2 bg-red-500 font-sans leading-normal flex">
                <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
                    <div className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden back" >
                        <Partition />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card
