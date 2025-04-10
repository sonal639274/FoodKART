import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
     const [active, setActive] = useState("add");
      
     const handleActive = (name)=>{
        setActive(name)
     }
  return (
    <div className='sidebar'>
    <div className="sidebar-options">
        <Link to='/add' className={active === "add" ? "sidebar-option active" : "sidebar-option"} onClick={()=>handleActive("add")}>
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </Link>
        <Link to='/list' className={active === "list" ? "sidebar-option active" : "sidebar-option"} onClick={()=>handleActive("list")}>
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </Link>
        <Link to='/orders' className={active === "orders" ? "sidebar-option active" : "sidebar-option"} onClick={()=>handleActive("orders")}>
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </Link>
    </div>
      
    </div>
  )
}

export default Sidebar
