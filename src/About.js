import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <main>
    <h1>About</h1>
    <Link to="Personal"><h3>Personal</h3></Link>
    <Link to="Public"><h3>Public</h3></Link>
    <Outlet/>
    </main>
    
  )
}

export default About