import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProfileDropDown/ProfileDropDownStyle.css';
import './NotificationDropDownStyle.css';
function NotificationDropDown({ className, isActive, setIsActive }) {
    // === Navigate All Notification ===
    const navigate = useNavigate();

    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsActive(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className={`DropdownNotification ${isActive && "active"}`} ref={ref}>
            <ul className='NotificationList'>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                        <p className='timeNofication text2'>13 minutes ago</p>
                    </div>
                </li>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span className='pointer'> Jayshree Rao</span>  created mentor batch for <span>Applied Finance.</span>
                        <p className='timeNofication text2'>3 hours ago</p>
                    </div>
                </li>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span className='pointer'> Nimisha Shrivastava</span>  added a mentor.
                        <p className='timeNofication text2'>13 minutes ago</p>
                    </div>
                </li>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span className='pointer'> Jayshree Rao </span> updated Taxation batch details and added mentors.
                        <p className='timeNofication text2'>3 hours ago</p>
                    </div>
                </li>
            </ul>
            <div className='footerViewAll' onClick={() => { navigate('/all-notification'); setIsActive(false) }}>
                <span>View all notifications</span>
            </div>
        </div >
    )
}

export default NotificationDropDown