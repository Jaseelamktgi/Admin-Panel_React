import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import PsychologyIcon from '@mui/icons-material/Psychology';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top"><span className="logo">adminDev</span></div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
               <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>

          <li>
            <PersonOutlineOutlinedIcon  className='icon'/>
            <span>Users</span>
          </li>

          <li>
            <StoreIcon  className='icon'/>
            <span>Products</span>
          </li>

          <li>
            <Inventory2OutlinedIcon  className='icon'/>
            <span>Orders</span></li>

          <li>
            <LocalShippingIcon  className='icon'/>
            <span>Delivery</span>

          </li>
          <p className="title">USEFUL</p>

          <li>
            <AssessmentIcon  className='icon'/>
           <span>Status</span>
          </li>

          <li>
            <NotificationsNoneIcon  className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamIcon  className='icon'/>
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon  className='icon'/>
            <span>Logs</span>
          </li>
          <p className="title">USER</p>

          <li>
            <SettingsIcon  className='icon'/>
            <span>Settings</span>
          </li>

          <li>
            <AccountBoxOutlinedIcon  className='icon'/>
          <span>Profile</span>
          </li>

          <li>
            <ExitToAppIcon  className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar 