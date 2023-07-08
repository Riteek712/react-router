import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Users = () => {
    const users = [
        { id: 1, name: 'user 1 details'},
        { id: 2, name: 'user 2 details'},
        { id: 3, name: 'user 3 details'}
    ]

  return (
    <div>
        {
            users.map((user)=>(
                <Link to={`/users/${user.id}`} key={user.id}><h5>{user.name}</h5></Link>)
            )
        }
        <Outlet/>
    </div>
  )
}

export default Users;