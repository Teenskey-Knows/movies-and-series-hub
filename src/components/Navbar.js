import React,{useState}from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import SidebarData from "./SidebarData"
import { IconContext } from 'react-icons'
//Allows us to style the icons all at ago
//=========================================

import  "./Navbar.css"

function Navbar() {

    const[sidebar,setSideBar]= useState(false)
    

    const showSidebar =()=>setSideBar(!sidebar)
    //so we're setting our sidebar to reverse state(to true)
  return (
  <>
  <IconContext.Provider value={{color: "red"
  }}>

  <div className="navbar">
    <Link to="#" className="menu-bars"><FaIcons.FaBars onClick={showSidebar}/></Link>
  </div>
  <nav className={sidebar? "nav-menu active" : "nav-menu"}>
    <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="nav-toggle">
            <Link to='#' className="menu-bars"><AiIcons.AiOutlineClose/></Link>
        </li>
    </ul>
    {SidebarData.map((item,index)=>{
      return (
        <li onClick={showSidebar} key={index} className={item.className}><Link to={item.path}>{item.icon}<span>{item.title}</span></Link></li>
      )
    })}
  </nav>
  </IconContext.Provider>
  </>
  )
}

export default Navbar