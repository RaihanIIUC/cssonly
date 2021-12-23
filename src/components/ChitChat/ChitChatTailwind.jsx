import React from 'react'

function ChitChatTailwind() {
    return (
        <div>
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                </div>
                <div>
                    <div class="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}

export default ChitChatTailwind
