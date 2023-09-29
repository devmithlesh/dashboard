import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileDropDownStyle.css';
import { useEffect } from 'react';
import { useRef } from 'react';
function ProfileDropDown({ className, isActive, setIsActive }) {

  const navigate = useNavigate();
  const ref = useRef();

  const role = localStorage.getItem("role");

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={`ProfileDropdownWrapper ${className} ${isActive && "active"}`} ref={ref}>
      <ul className='ListProfileDropdown'>
        <li className='Border-btm pb-12' onClick={() => navigate(`${role === "admin" ? '/admin/edit-profile' : role === "mentor" ? '/mentor/edit-profile' : '/Mentee/edit-profile'}`)}>My Profile</li>
        {/* <li>Guidelines</li>
                <li>Policies</li> */}
        {/* <li className='Border-btm pb-12' onClick={() => navigate(`'/admin/EditProfile'`)}>Settings</li> */}
        <li className='logOut' onClick={() => { localStorage.clear(); window.location.reload() }}>Log Out</li>
      </ul>
    </div>
  )
}

export default ProfileDropDown