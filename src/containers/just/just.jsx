import React from 'react';
import './just.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Just() {
	return (
		<div className='just'>
			<div className='container-just'>
				<div className='just__inner'>
          <div className="just__gradient"></div>
					<h3 className='just__title watch-title'>Just Release</h3>
          <div className="just__list">
            <li className="just__item just__item-1">
              <p className="just__item__title">Dungeon & Dragons;  Honor Among Thief</p>
              <p className='populars-item-text-4'><strong>4.6</strong>| Mystery • Movie</p>
            </li>
            <li className="just__item just__item-2">
              <p className="just__item__title"><br /> Barbie</p>
              <p className='populars-item-text-4'><strong>4.6</strong>| Season 1 • Action • Drama </p>
            </li>
            <li className="just__item just__item-3">
              <p className="just__item__title"><br /> The Super Mario Bros Movie</p>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="just__item just__item-4">
              <p className="just__item__title"><br /> Satan’s slaves</p>
              <p className='populars-item-text-4'><strong>4.6</strong>| Horror • Movie</p>
            </li>
            <li className="just__item just__item-1">
              <p className="just__item__title"><br /> Enolames 2</p>
              <p className='populars-item-text-4'><strong>4.8</strong>| Action • Movie</p>
            </li>
          </div>
				</div>
			</div>
		</div>
	);
}
