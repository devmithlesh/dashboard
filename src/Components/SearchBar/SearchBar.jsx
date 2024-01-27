import React from 'react'
import './SearchBarStyle.css';

const SearchBar = ({ placeholder, value, onChange, onKeyDown, onClick }) => {
  return (
    <label htmlFor={placeholder + "1"} className='searchLabel'>
      <div className='SearchBox flexbox'>
        <input type='text' placeholder={placeholder} id={placeholder + '1'} value={value} onChange={onChange} onKeyDown={onKeyDown} />
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
          <path d="M6.70841 13.1873C3.41258 13.1873 0.729248 10.504 0.729248 7.20817C0.729248 3.91234 3.41258 1.229 6.70841 1.229C10.0042 1.229 12.6876 3.91234 12.6876 7.20817C12.6876 10.504 10.0042 13.1873 6.70841 13.1873ZM6.70841 2.104C3.89091 2.104 1.60425 4.3965 1.60425 7.20817C1.60425 10.0198 3.89091 12.3123 6.70841 12.3123C9.52591 12.3123 11.8126 10.0198 11.8126 7.20817C11.8126 4.3965 9.52591 2.104 6.70841 2.104Z" fill="#737373" />
          <path d="M12.8334 13.7707C12.7226 13.7707 12.6118 13.7298 12.5243 13.6423L11.3576 12.4757C11.1884 12.3065 11.1884 12.0265 11.3576 11.8573C11.5268 11.6882 11.8068 11.6882 11.9759 11.8573L13.1426 13.024C13.3118 13.1932 13.3118 13.4732 13.1426 13.6423C13.0551 13.7298 12.9443 13.7707 12.8334 13.7707Z" fill="#737373" />
        </svg>
      </div>
    </label>
  )
}

export default SearchBar