import React from 'react';
import './header-nav.css';
import { NavList } from '../../../utils/NavList';

export default function Navbar() {
  return (
    <nav className='md-navbar'>
      <ul className='md-nav-list'>
        {
          NavList.map(el => <li className='md-nav-item' key={el.id}>{el.name}</li>)
        }
      </ul>
    </nav>
  )
}
