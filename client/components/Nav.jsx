import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
