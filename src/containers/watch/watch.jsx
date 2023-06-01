import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './watch.css';
import { useState } from 'react';
import conwatchingRepository from '../../repositories/conwatchingRepository';
import { useEffect } from 'react';

export default function Watch() {
	const [watchList, setWatchList] = useState([]);

	const getWatching = async () => {
		const data = await conwatchingRepository.getConwatchingList();
		setWatchList(data);
	};

	useEffect(() => {
		getWatching();
	}, []);

	return (
		<div className='watch'>
			<div className='container-watch'>
				<div className='watch-inner'>
					<h2 className='watch-title'>Continue Watching</h2>
					<div className='watch-list'>
						{watchList.map((el) => {
							return (
								<div className='watch-item' key={el.id} style={{ backgroundImage: `url(${el.img_url})` }}>
									<div className='watch-item__inner'>
										<h3 className='watch-item__title'>{el.title}</h3>
										<p className='watch-item__year'>{el.year}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
