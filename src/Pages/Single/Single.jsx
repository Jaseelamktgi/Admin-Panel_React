import React from 'react'
import './Single.scss'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <img src="https://image.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168632503.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Single