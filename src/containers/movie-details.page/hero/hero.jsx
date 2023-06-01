import React from 'react';
import HeroButtons from './hero-buttons';
import './hero.css';

export default function Hero() {
	return (
		<section className='md-hero'>
			<div className='container'>
				<div className='md-hero-inner'>
					<p className='hero-text-1'>Series</p>
					<h1 className='hero-title'>The Last Of Us Season 1</h1>
					<p className='hero-text-2'>9 Episodes • 2022 • Fantasy • Actions</p>
				</div>
				<HeroButtons />
			</div>
		</section>
	);
}
