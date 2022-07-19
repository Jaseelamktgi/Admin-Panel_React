import React from 'react'
import './Widget.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Widget=({type})=> {
  return (
    <div className='widgets'>
        <div className="left">
          <span className="title">USERS</span>
          <span className="counter">45679</span>
          <span className="link">See all users</span>
        </div>
        <div className="right">
          <div className="percentage negative">
            <KeyboardArrowDownIcon/>
            20%</div>
            <PersonOutlineOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget