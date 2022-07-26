import React from 'react'
import './Featured.scss'
import MoreVerticon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVerticon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$567</p>
        <p className="desc">Previous transactions processing .Last payment maynot be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">$12.56</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'  />
              <div className="resultAmount">$12.56</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon fontSize='small' />
              <div className="resultAmount">$12.56</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured