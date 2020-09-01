import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import "./Sidebar.css"


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown' title="Femmy Egomson"/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="People"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
