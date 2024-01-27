import React from 'react'
import './DashboardStyle.css'
import { useNavigate } from 'react-router-dom'
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch'
import SearchBar from '../../Components/SearchBar/SearchBar'
import InputField from '../../Components/InputField/InputField'
import DropdownCustom from '../../Components/DropdownCustom/DropdownCustom'
import Button from '../../Components/Button/Button'


const Dashboard = () => {
const navigate = useNavigate()

const callDetailsOptions = [
    {
        label: 'Completed Calls',
        value: 'completed'
    },
    {
        label: 'Cancelled Calls',
        value: 'cancelled'
    },
    {
        label: 'No Show (non availability) ',
        value: 'noshow'
    },
];

    return (
        <div>
            <p> Dashboard</p>
            <button className='mt-20 pointer' onClick={() => navigate('/addscreen')}>AddMenu</button>
            <ToggleSwitch />
            <SearchBar  placeholder={'Search data'}/>
            <InputField placeholder={'Enter value'} labelName={'Name'} />
            <DropdownCustom placeholder={'Programme'} options={callDetailsOptions} src={'/assets/img/arrow-down2.png'} />
       <Button name={'Button'} className={'blueBorderButton'} />
       
        </div>
    )
}

export default Dashboard
