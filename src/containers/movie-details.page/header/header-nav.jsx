import React from 'react';
import './header-nav.css';
import { useState } from 'react';
import { useEffect } from 'react';
import navbarRepository from '../../../repositories/navbarRepository';
import NavListRender from '../../header/navListRender';

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
      <NavListRender array={navlist}/>
    </nav>
  )
}