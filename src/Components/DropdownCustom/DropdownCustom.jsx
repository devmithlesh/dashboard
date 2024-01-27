import { useState } from 'react'
import './DropdownCustomStyle.css'

import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const DropdownCustom = ({ placeholder, src, options, value, onChange, className, name, handleSetFilters }) => {

  const notAll = ["program", "title", "paymentMethod", "rating", "count", "agenda", "for"];

  const [isActive, setIsActive] = useState(false);

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
    <div className={`CustomDropdownmain ${className} ${isActive && "active"}`} ref={ref} >
      <div className="dropdownselect flex-between" onClick={() => setIsActive(!isActive)}>
        <span className='text3'>{value ? options?.filter(item => item?.value === value)[0]?.label : placeholder}</span>
        {src && <img src={src} alt="downarrow" className='downarrow' />}
      </div>
      <div className="ListthatSelected">
        <ul className='listwrapfordropdown'>
          {(options?.length > 0 && (!notAll.includes(name))) && <li className='text3' onClick={() => { onChange("", name); setIsActive(false); handleSetFilters && handleSetFilters("All", name) }} >
            <p>{'All'}</p>
          </li>}
          {
            options?.length > 0 ? options?.map((item, index) =>
              <li className='text3' key={index} onClick={() => { onChange(item?.value, name); setIsActive(false); handleSetFilters && handleSetFilters(item?.label, name) }} >
                <p>{item?.label}</p>
              </li>
            )
              :
              <li><span className='text3'>No option available</span></li>
          }
        </ul>
      </div>
    </div>
  )
}

export default DropdownCustom