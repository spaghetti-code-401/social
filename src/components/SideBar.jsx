import React from 'react'
import OnlineFriends from './OnlineFriends'
import './sideBar.scss'

export default function SideBar() {
    return (
        <div className='sideBar glass'>
            <div className='sideBarWrapper'>
                <OnlineFriends/>
            </div>
        </div>
    )
}
