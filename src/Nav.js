import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/NewPost'>New Post</Link>
          </li>
          <li>
            <Link to='/Missing'>Missing</Link>
          </li>
          <li>
            <Link to='/PostPage'>Post Page</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav