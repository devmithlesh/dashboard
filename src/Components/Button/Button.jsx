import React from 'react'
import './ButtonStyle.css'

const Button = ({ className, onClick, disabled, src, svg, name }) => {

    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {src && <img src={src} alt="icon" />}
            {svg && svg}
            {name}
        </button>
    )
}

export default Button