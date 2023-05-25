import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './watch.css';

export default function Watch() {
	return (
		<div className='watch'>
			<div className='container-watch'>
				<div className='watch-inner'>
					<h2 className='watch-title'>Continue Watching</h2>
					<div className='watch-list'>
						<div className='watch-item'>
							<div className='watch-item__inner'>
								<h3 className='watch-item__title'>
									Guardians of the Galaxy Vol. 3
								</h3>
								<p className='watch-item__year'>2023</p>
							</div>
						</div>
						<div className='watch-item'>
							<div className='watch-item__inner watch-item__2'>
								<h3 className='watch-item__title'>
									The Last of Us - Episode 4
								</h3>
								<p className='watch-item__year'>2023</p>
							</div>
						</div>
						<div className='watch-item'>
							<div className='watch-item__inner watch-item__3'>
								<h3 className='watch-item__title'>Godzilla</h3>
								<p className='watch-item__year'>2022</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
