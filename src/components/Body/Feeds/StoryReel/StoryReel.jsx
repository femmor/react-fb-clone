import React from 'react'
import Story from "./Story"
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80"
                profileSrc="https://randomuser.me/api/portraits/men/91.jpg"
                title="Kurt Jackson"
            />
            <Story 
                image="https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/36.jpg"
                title="Melanie Watson"
            />
            <Story 
                image="https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/2.jpg"
                title="Karen Mojo"
            />
            <Story 
                image="https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/91.jpg"
                title="Angel Crasher"
            />
            <Story 
                image="https://images.unsplash.com/photo-1524842495237-6abc737eae1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80"
                profileSrc="https://randomuser.me/api/portraits/men/78.jpg"
                title="Benjy Reels"
            />
        </div>
    )
}

export default StoryReel
