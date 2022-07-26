import React,{useState}from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import SidebarData from "./SidebarData"
import  "../../src/components/Navbar"

function Navbar() {

    const[sidebar,setSideBar]= useState(false)
    

    const showSidebar =()=>setSideBar(!sidebar)
    //so we're setting our sidebar to reverse state(to true)
  return (
  <>
  <div className="navbar">
    <Link to="#" className="menu-bars"><FaIcons.FaBars onClick={showSidebar}/></Link>
  </div>
  <nav className={sidebar? "nav-menu active" : "nav-menu"}>
    <ul className="nav-menu-items">
        <li className="nav-toggle">
            <Link to='#' className="menu-bars"><AiIcons.AiOutlineClose/></Link>
        </li>
    </ul>
    {SidebarData.map((item,index)=>{
      return (
        <li key={index} className={item.className}><Link to={item.path}><span>{item.title}</span></Link></li>
      )
    })}
  </nav>
  </>
  )
}

export default Navbar