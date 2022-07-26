import React,{useState}from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"

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
  </nav>
  </>
  )
}

export default Navbar