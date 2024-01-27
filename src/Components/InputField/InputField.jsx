import React from 'react'
import './InputFieldStyle.css'

const InputField = ({type,className,placeholder,id,labelName,checkBoxWrap, onChange,disabled, value, checked, isError, errorMessage,notImp, onKeyDown, blackLabel, name, min, max, onBlur}) => {
  return (
    <div className={`formGroups ${checkBoxWrap ?? ""}`}>
      <label className={blackLabel && 'visible0'} htmlFor={id}>{labelName}
        {!notImp && <span className={"impRed"}> *</span>}
      </label>
      <div className='w-100'>
        <input type={type} min={min} max={max} className={className} placeholder={placeholder} onKeyDown={onKeyDown} disabled={disabled} value={value} onChange={onChange} id={id} checked={checked} name={name} onBlur={onBlur} />
        {errorMessage && <span className='FormError'>{errorMessage}</span>}
      </div>
    </div>
  )
}

export default InputField