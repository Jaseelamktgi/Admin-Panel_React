import React from 'react'
import './Widget.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({ type }) => {
  let data;
  //temperary
  let amount = 100
  let diff = 20
  switch (type) {
    case "users":
      data = {
        title: 'USERS',
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className='icon'
          style={{
            color: 'purple',
            backgroundColor: 'rgba(128,0,128,0.2)'
          }} />
      };
      break;
    case "orders":
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className='icon'
          style={{
            color: 'green',
            backgroundColor: 'rgba(163, 192, 163)'
          }} />

      };
      break;
    case "earnings":
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className='icon'
          style={{
            color: 'blue',
            backgroundColor: 'rgba(192, 197, 223)'
          }} />
      };
      break;
    case "balance":
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className='icon'
          style={{
            color: 'rgba(180, 77, 8)',
            backgroundColor: 'rgba(219, 180, 154)'
          }} />
      };
      break;
    default:
      break;

  }

  return (
    <div className='widgets'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'}{amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowDownIcon />
          {diff}%</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget