import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProfileDropDown/ProfileDropDownStyle.css';
import './NotificationDropDownStyle.css';
function NotificationDropDown({ className, isActive }) {
    // === Navigate All Notification ===
    const navigate = useNavigate();
    return (
        <div className={`DropdownNotification tabActive ${className} ${isActive && "active"}`}>
            <ul className='NotificationList'>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span> Nimisha Shrivastava</span> added a mentor.
                        <p className='timeNofication text2'>13 minutes ago</p>
                    </div>
                </li>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span> Jayshree Rao</span>  created mentor batch for <span>Applied Finance.</span>
                        <p className='timeNofication text2'>3 hours ago</p>
                    </div>
                </li>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span> Nimisha Shrivastava</span>  added a mentor.
                        <p className='timeNofication text2'>13 minutes ago</p>
                    </div>
                </li>
                <li>
                    <img src="/assets/img/profile.png" alt="" />
                    <div className='notificationBel'>
                        <span> Jayshree Rao </span> updated Taxation batch details and added mentors.
                        <p className='timeNofication text2'>3 hours ago</p>
                    </div>
                </li>
            </ul>
            <div className='footerViewAll' onClick={() => navigate('/admin/notifications')}>
                <span>View all notifications</span>
            </div>
        </div >
    )
}

export default NotificationDropDown