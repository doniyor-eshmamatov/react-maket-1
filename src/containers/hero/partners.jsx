import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partners.css';
import { useState } from 'react';
import PartnersRepository from '../../repositories/partnersRepository';
import { useEffect } from 'react';

export default function Partners() {
	const [partners, setPartners] = useState([]);

	const getPartnersData = async () => {
		const data = await PartnersRepository.getPartners();
		setPartners(data);
	};

	useEffect(() => {
		getPartnersData();
	}, []);

	return (
		<div className='container-parners'>
			<div className='partners'>
				{partners.map((el) => {
					return (
						<div className='partners__item' key={el.id}>
							<div className='partners-item-img' style={{ backgroundImage: `url(${el.img_url})` }}></div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
