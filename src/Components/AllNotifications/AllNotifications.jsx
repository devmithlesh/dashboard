import React from 'react';
import './AllNotificationsStyle.css';
import Button from '../Button/Button';
const AllNotifications = ({ isActive }) => {
    return (
        <section className={`DashboardSection ${isActive && "active"}`}>
            <div className="DashboardWrapper">
                <div className="headingwrap mb-20">
                    <h2 className='heading-2'>Notifications</h2>
                </div>

                <div className="AllNotificationWrapper">
                    <ul className='NotificationList AllNotificationList'>
                        <li className='Hproimg '>
                            <img src="/assets/img/profile.png" alt="" />
                            <div className="notificationBel">
                                <div className="nameuserNotification">
                                    <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                                    <p className="timeNofication">13 minutes ago</p>
                                </div>
                                <span className='Bluedot'></span>
                            </div>
                        </li>
                        <li className='Hproimg '>
                            <img src="/assets/img/profile.png" alt="" />
                            <div className="notificationBel">
                                <div className="nameuserNotification">
                                    <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                                    <p className="timeNofication">13 minutes ago</p>
                                </div>
                                <span className='Bluedot'></span>
                            </div>
                        </li>
                        <li className='Hproimg '>
                            <img src="/assets/img/profile.png" alt="" />
                            <div className="notificationBel">
                                <div className="nameuserNotification">
                                    <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                                    <p className="timeNofication">13 minutes ago</p>
                                </div>
                                <span className='Bluedot'></span>
                            </div>
                        </li>
                        <li className='Hproimg '>
                            <img src="/assets/img/profile.png" alt="" />
                            <div className="notificationBel">
                                <div className="nameuserNotification">
                                    <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                                    <p className="timeNofication">13 minutes ago</p>
                                </div>
                                <span className='Bluedot'></span>
                            </div>
                        </li>
                        <li className='Hproimg '>
                            <img src="/assets/img/profile.png" alt="" />
                            <div className="notificationBel">
                                <div className="nameuserNotification">
                                    <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                                    <p className="timeNofication">13 minutes ago</p>
                                </div>
                                <span className='Bluedot'></span>
                            </div>
                        </li>
                        <li className='Hproimg '>
                            <img src="/assets/img/profile.png" alt="" />
                            <div className="notificationBel">
                                <div className="nameuserNotification">
                                    <span className='pointer'> Nimisha Shrivastava</span> added a mentor.
                                    <p className="timeNofication">13 minutes ago</p>
                                </div>
                                <span className='Bluedot'></span>
                            </div>
                        </li>
                    </ul>
                    <div className="ViewMorenotification flex-center">
                        <Button name={'View More'} className={'blueButton'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllNotifications