import React from 'react'
import StoryReel from "./StoryReel/StoryReel"
import MessageSender from "./MessageSender/MessageSender"
import "./Feeds.css"

function Feeds() {
    return (
        <div className="feeds">
            <MessageSender />
            <StoryReel />
        </div>
    )
}

export default Feeds;
