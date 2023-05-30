import React from 'react';

import './genres-list.css';

export default function GenresList() {
	return (
		<div className='container-just'>
				<div className='genres-group-inner'>
          <div className="just__gradient"></div>
					<ul className='genres-list'>
						<li className='genres-item'>Superhero</li>
						<li className='genres-item'>Drama</li>
						<li className='genres-item'>Sitcom</li>
						<li className='genres-item'>Thriller</li>
						<li className='genres-item'>Comedy</li>
						<li className='genres-item'>Fantasy</li>
					</ul>
				</div>
			</div>
	);
}
