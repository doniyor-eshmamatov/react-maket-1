import React from 'react';
import Navbar from './header-nav';
import './header.css';
import HeaderButtons from './header-buttons';
import Logo from '../../assets/images/logo.svg';

export default function Header() {
	return (
		<header className='site-header'>
			<div className='container'>
				<div className='site-header-inner'>
          <img src={Logo} alt="logo" className='logo' />
          <Navbar/>
          <HeaderButtons/>
				</div>
			</div>
		</header>
	);
}
