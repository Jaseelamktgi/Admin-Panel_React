import './Home.scss'
import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
import Widget from '../../Component/Widgets/Widget'
import Featured from '../../Component/Featured/Featured'
import Chart from '../../Component/Chart/Chart'
function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget">
          <Widget type="users"/>
          <Widget type="orders"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>


      </div>

    </div>
  )
}

export default Home
