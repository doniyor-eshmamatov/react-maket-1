import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partners.css'

import img1 from '../../assets/images/partner-img1.svg';
import img2 from '../../assets/images/partner-img2.svg';
import img3 from '../../assets/images/partner-img3.svg';
import img4 from '../../assets/images/partner-img4.svg';
import img5 from '../../assets/images/partner-img5.svg';
import img6 from '../../assets/images/partner-img6.svg';
import img7 from '../../assets/images/partner-img7.svg';

export default function Partners() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<Slider {...settings} className='partners'>
			<div className='partners__item'>
				<img src={img1} alt='partners logo' width={112}/>
			</div>
			<div className='partners__item'>
				<img src={img2} alt='partners logo' width={125}/>
			</div>
			<div className='partners__item'>
				<img src={img3} alt='partners logo' width={147}/>
			</div>
			<div className='partners__item'>
				<img src={img4} alt='partners logo' width={125}/>
			</div>
			<div className='partners__item'>
				<img src={img5} alt='partners logo' width={120}/>
			</div>
			<div className='partners__item'>
				<img src={img6} alt='partners logo' width={96}/>
			</div>
			<div className='partners__item'>
				<img src={img7} alt='partners logo' width={112}/>
			</div>
			<div className='partners__item'>
				<img src={img1} alt='partners logo' width={112}/>
			</div>
			<div className='partners__item'>
				<img src={img2} alt='partners logo' width={125}/>
			</div>
			<div className='partners__item'>
				<img src={img3} alt='partners logo' width={147}/>
			</div>
			<div className='partners__item'>
				<img src={img4} alt='partners logo' width={125}/>
			</div>
			<div className='partners__item'>
				<img src={img5} alt='partners logo' width={120}/>
			</div>
			<div className='partners__item'>
				<img src={img6} alt='partners logo' width={96}/>
			</div>
			<div className='partners__item'>
				<img src={img7} alt='partners logo' width={112}/>
			</div>
		</Slider>
	);
}
