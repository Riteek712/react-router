import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  const naveLinkStyle = ({isActive})=>{
    return{
      fontWeight: isActive? "bold":"normal",
      textDecoration: isActive? "underline":"none"
    }
  }
  return (
    <nav className='nav'>
        <ul>
          <li>
            <NavLink style={naveLinkStyle} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink style={naveLinkStyle} to='/About'>About</NavLink>
          </li>
          <li>
            <NavLink style={naveLinkStyle} to='/NewPost'>New Post</NavLink>
          </li>
          <li>
            <NavLink style={naveLinkStyle} to='/Missing'>Missing</NavLink>
          </li>
          <li>
            <NavLink style={naveLinkStyle} to='/PostPage'>Post Page</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Nav