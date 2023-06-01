import React, { useState } from 'react';
import Navbar from './header-nav';
import './header.css';
import HeaderButtons from './header-buttons';
import Logo from '../../../assets/images/logo.svg';

export default function Header() {

	const [headerClass, setHeaderClass] = useState('md-site-header');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 25) {
			setHeaderClass('md-site-header md-hide')
		}
		else {
			setHeaderClass('md-site-header')
		}
	})

	return (
		<header className={headerClass}>
			<div className='container'>
				<div className='md-site-header-inner'>
          <img src={Logo} alt="logo" className='logo' />
          <Navbar/>
          <HeaderButtons/>
				</div>
			</div>
		</header>
	);
}
