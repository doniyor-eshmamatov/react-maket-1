import React from 'react';
import './header-nav.css';
import { useState } from 'react';
import { useEffect } from 'react';
import navbarRepository from '../../repositories/navbarRepository';

export default function Navbar() {

  const [navlist, setNavlist] = useState([]);

  const getNavbar = async () => {
    const data = await navbarRepository.getNavList()
    setNavlist(data)
  }

  useEffect(() => {
    getNavbar()
  }, [])

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {
          navlist.map(el => <li className='nav-item' key={el.id}>{el.name}</li>)
        }
      </ul>
    </nav>
  )
}
