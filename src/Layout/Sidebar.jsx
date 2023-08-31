import React from 'react'
import './LayoutStyle.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;

    // ---route
    const dashboard = ["/", "/addscreen"];
    const callrecord = ["/call-record", "/call-record/data-calls"];

    return (
        <div className='MainSidebarWrapper'>
            <div className="logomain">
                <img src="/assets/img/google.jpg" alt="" />
            </div>
            <ul className="sidebarlist mt-40">
                <li onClick={() => navigate('/')} className={(dashboard.includes(pathname) || dashboard.includes(pathname.split("/")[2]?.toLowerCase())) && 'active'}>
                    <p>Dashboard</p>
                </li>
                <li onClick={() => navigate('/call-record')} className={(callrecord.includes(pathname) || callrecord.includes(pathname.split("/")[2]?.toLowerCase())) && 'active'}>
                    <p>Call Records</p>
                </li>
                <li onClick={() => navigate('/mentor')} className={pathname === '/mentor' && 'active'}>
                    <p>Mentors</p>
                </li>
                <li onClick={() => navigate('/mentee')} className={pathname === '/mentee' && 'active'}>
                    <p>Mentee</p>
                </li>
                <li onClick={() => navigate('/all-program')} className={pathname === '/all-program' && 'active'}>
                    <p>All Program</p>
                </li>
                <li onClick={() => navigate('/manage-credit')} className={pathname === '/manage-credit' && 'active'}>
                    <p>Manage Credits</p>
                </li>
                <li onClick={() => navigate('/billing')} className={pathname === '/billing' && 'active'}>
                    <p>Billings</p>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
