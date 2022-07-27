import './Home.scss'
import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
import Widget from '../../Component/Widgets/Widget'
import Featured from '../../Component/Featured/Featured'
import Table from '../../Component/Table/Table'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          {/* <Chart /> */}
        </div>
        <div className="listContainer">
          <div className="ListTitle">
            Latest Transations
            <Table/>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Home
 