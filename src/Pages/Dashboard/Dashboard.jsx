import React from 'react'
import './DashboardStyle.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
const navigate = useNavigate()

    return (
        <div>
            <p> Dashboard</p>
            <button className='mt-20 pointer' onClick={() => navigate('/addscreen')}>AddMenu</button>
        </div>
    )
}

export default Dashboard
