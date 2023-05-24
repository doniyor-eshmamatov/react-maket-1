import React from 'react';
import './header-nav.css';
import { NavList } from '../../utils/NavList';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {
          NavList.map(el => <li className='nav-item' key={el.id}>{el.name}</li>)
        }
      </ul>
    </nav>
  )
}
