import React from 'react'
import './LayoutStyle.css'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className='MainSidebarWrapper'>
            <ul>
                <li onClick={() => navigate('/')}>Dashboard</li>
                <li onClick={() => navigate('/about')}>About</li>
            </ul>
        </div>
    )
}

export default Sidebar
