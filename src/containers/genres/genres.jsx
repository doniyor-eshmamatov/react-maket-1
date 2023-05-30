import React from 'react';
import GenresArrows from './genres-arrows';
import GenresButton from './genres-buttons';
import GenresList from './genres-list';
import './genres.css';

export default function Genres() {
	return (
		<div className='genres'>
			<div className='container'>
				<div className='genres-inner'>
					<p className='genres-text-1'>Explore by the genre</p>
					<h3 className='genres-title'>Guardian Of The Galaxy; Volume 3</h3>
					<p className='populars-item-text-4 genres-text-2'>
						<strong>4.8</strong>| 2h40m • 2022 • Superhero • Actions
					</p>
					<GenresButton />
					<div className='genres-arrow-box'>
						<GenresArrows />
					</div>
				</div>
			</div>
      <GenresList/>
		</div>
	);
}
