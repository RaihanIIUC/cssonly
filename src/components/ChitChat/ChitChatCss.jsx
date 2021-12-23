import React from 'react'

function ChitChatCss() {
    return (
        <div>
            <div class="chat-notification">
                <div class="chat-notification-logo-wrapper">
                    <img className="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
                </div>
                <div class="chat-notification-content">
                    <h4 class="chat-notification-title">ChitChat</h4>
                    <p class="chat-notification-message">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}

export default ChitChatCss
