import React from 'react'
import { NavList } from '../../utils/NavList'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        {
          NavList.map(el => <li className='nav-item' key={el.id}>{el.name}</li>)
        }
      </ul>
    </nav>
  )
}
