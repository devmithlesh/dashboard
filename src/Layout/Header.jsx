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
                    <div className="Hproimg">
                        <label class="NotiwrapIcon">
                            <input type="checkbox" />
                            <svg onClick={() => setIsActiveNoti(true)} class="bell-regular" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512">
                                <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
                            </svg>
                            
                            <svg onClick={() => setIsActiveNoti(false)} class="bell-solid" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512">
                                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
                            </svg>
                        </label>
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
