import React from 'react';
import HeroButtons from './hero-buttons';
import './hero.css';
import Partners from './partners';

export default function Hero() {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-inner'>
					<p className='hero-text-1'>Season 3</p>
					<h1 className='hero-title'>The Mandalorian</h1>
					<p className='hero-text-2'>2h40m • 2022 • Fantasy • Actions</p>
					<p className='hero-text-3'>
						The third season of the American television series The Mandalorian
						stars Pedro Pascal as the title character, a bounty hunter traveling
						to Mandalore to redeem his past transgressions with his adopted son
						Grogu and being aided on their journey by fellow Mandalorian
						Bo-Katan Kryze.
					</p>
				</div>
				<HeroButtons />
			</div>
			<Partners />
		</section>
	);
}
