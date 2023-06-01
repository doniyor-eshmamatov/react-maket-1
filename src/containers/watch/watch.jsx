import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './watch.css';
import { useState } from 'react';
import conwatchingRepository from '../../repositories/conwatchingRepository';
import { useEffect } from 'react';
import WatchListRender from './watchListRender';

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
					<WatchListRender array={watchList}/>
				</div>
			</div>
		</div>
	);
}
