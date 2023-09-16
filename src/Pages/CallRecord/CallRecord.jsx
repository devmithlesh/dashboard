import React from 'react'
import './CallRecordstyle.css'
import { useNavigate } from 'react-router-dom'

const CallRecord = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>CallRecord</p>
            <button className='mt-20' onClick={() => navigate('/call-record/data-calls')}>Data Calls</button>
        </div>

    )
}

export default CallRecord