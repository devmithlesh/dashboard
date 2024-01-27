import React, { useState } from 'react'
import './LayoutStyle.css'
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown'
import NotificationDropDown from '../Components/NotificationDropDown/NotificationDropDown'

const Header = ({ setIsActive, isActive }) => {

    const [isActiveNoti, setIsActiveNoti] = useState(false)

    return (
        <div className='MainHeaderWrapper'>
            <div className="hbody between">
                <h1 className='textmain'>Welcome! <span>Admin</span></h1>
                <div className="Hprofilemain items-center">
                    <div className={`nofitIconMianWrap`}>
                        <img src="/assets/img/notification.png" alt="" className='pointer' onClick={() => setIsActiveNoti(!isActiveNoti)} />
                        <NotificationDropDown isActive={isActiveNoti} setIsActive={setIsActiveNoti} />
                    </div>
                    <div className="Hproimg">
                        <img src="/assets/img/profile.png" alt="" />
                    </div>
                    {/* <ProfileDropDown /> */}

                    <span className='toggleBar' onClick={() => setIsActive(!isActive)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.66667C2 4.29848 2.29848 4 2.66667 4H17.3333C17.7015 4 18 4.29848 18 4.66667C18 5.03486 17.7015 5.33333 17.3333 5.33333H2.66667C2.29848 5.33333 2 5.03486 2 4.66667ZM2 10C2 9.63181 2.29848 9.33333 2.66667 9.33333H17.3333C17.7015 9.33333 18 9.63181 18 10C18 10.3682 17.7015 10.6667 17.3333 10.6667H2.66667C2.29848 10.6667 2 10.3682 2 10ZM2.66667 14.6667C2.29848 14.6667 2 14.9651 2 15.3333C2 15.7015 2.29848 16 2.66667 16H17.3333C17.7015 16 18 15.7015 18 15.3333C18 14.9651 17.7015 14.6667 17.3333 14.6667H2.66667Z" fill="#121112"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
