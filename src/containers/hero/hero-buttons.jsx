import React from 'react';
import './hero-buttons.css';
// import BtnImg1 from '../../assets/images/hero-btn-1.svg';
// import BtnImg2 from '../../assets/images/hero-btn-2.svg';
// import BtnImg3 from '../../assets/images/hero-btn-3.svg';

export default function HeroButtons() {
	return (
		<div className='hero-linkbox'>
			<button className='hero-btn hero-btn-1'>Play Now</button>
			<button className='hero-btn hero-btn-2'>Watch Trailer</button>
			<button className='hero-btn hero-btn-3'>Add Watchlist</button>
		</div>
	);
}
