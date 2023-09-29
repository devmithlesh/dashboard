import React from 'react'
import './LayoutStyle.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = ({ setIsActive, isActive }) => {

    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;

    // ---route
    const dashboard = ["/", "/addscreen"];
    const callrecord = ["/call-record", "/call-record/data-calls"];

    return (
        <div className={`MainSidebarWrapper ${isActive === true && 'active'}`}>
            <span className='crossIcon' onClick={() => setIsActive(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8243 5.02426C16.0586 4.78995 16.0586 4.41005 15.8243 4.17574C15.5899 3.94142 15.2101 3.94142 14.9757 4.17574L10 9.15147L5.02426 4.17574C4.78995 3.94142 4.41005 3.94142 4.17574 4.17574C3.94142 4.41005 3.94142 4.78995 4.17574 5.02426L9.15147 10L4.17574 14.9757C3.94142 15.2101 3.94142 15.5899 4.17574 15.8243C4.41005 16.0586 4.78995 16.0586 5.02426 15.8243L10 10.8485L14.9757 15.8243C15.2101 16.0586 15.5899 16.0586 15.8243 15.8243C16.0586 15.5899 16.0586 15.2101 15.8243 14.9757L10.8485 10L15.8243 5.02426Z" fill="#121112" />
                </svg>
            </span>

            <div className="logomain">
                <img src="/assets/img/google.jpg" alt="" />
            </div>
            <ul className="sidebarlist mt-40">
                <li onClick={() => navigate('/')} className={(dashboard.includes(pathname) || dashboard.includes(pathname.split("/")[2]?.toLowerCase())) && 'active'}>
                    <p onClick={() => setIsActive(true)}>Dashboard</p>
                </li>
                <li onClick={() => navigate('/call-record')} className={(callrecord.includes(pathname) || callrecord.includes(pathname.split("/")[2]?.toLowerCase())) && 'active'}>
                    <p onClick={() => setIsActive(true)}>Call Records</p>
                </li>
                <li onClick={() => navigate('/mentor')} className={pathname === '/mentor' && 'active'}>
                    <p onClick={() => setIsActive(true)}>Mentors</p>
                </li>
                <li onClick={() => navigate('/mentee')} className={pathname === '/mentee' && 'active'}>
                    <p onClick={() => setIsActive(true)}>Mentee</p>
                </li>
                <li onClick={() => navigate('/all-program')} className={pathname === '/all-program' && 'active'}>
                    <p onClick={() => setIsActive(true)}>All Program</p>
                </li>
                <li onClick={() => navigate('/manage-credit')} className={pathname === '/manage-credit' && 'active'}>
                    <p onClick={() => setIsActive(true)}>Manage Credits</p>
                </li>
                <li onClick={() => navigate('/billing')} className={pathname === '/billing' && 'active'}>
                    <p onClick={() => setIsActive(true)}>Billings</p>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
