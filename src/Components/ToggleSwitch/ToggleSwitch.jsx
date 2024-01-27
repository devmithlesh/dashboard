import React from 'react'
import './ToggleSwitchStyle.css';

const ToggleSwitch = ({isActive, checked, onChange, name}) => {
  return (
    <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} name={name} />
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch