import React from 'react';

import './lists.css';

import listImg1 from '../../assets/images/lists-img-1.png';
import listImg2 from '../../assets/images/lists-img-2.png';
import listImg3 from '../../assets/images/lists-img-3.png';
import listImg4 from '../../assets/images/lists-img-4.png';
import listImg5 from '../../assets/images/lists-img-5.png';

export default function Lists() {
  return (
    <div className='lists'>
      <div className="container-just">
        <div className="lists-inner">
          <div className="just__gradient"></div>
          <h2 className="lists-title">Your Watchlist</h2>
          <ul className="lists-list">
            <li className="lists-item">
              <img src={listImg1} alt=" " />
              <h3 className="lists-item-title">TOP GUN:Maverick</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg2} alt=" " />
              <h3 className="lists-item-title">Spiderman; into the spider verse</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg3} alt=" " />
              <h3 className="lists-item-title">Black Panther; Wakanda Forever</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg4} alt=" " />
              <h3 className="lists-item-title">Batman V Superman</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg5} alt=" " />
              <h3 className="lists-item-title">Red Notice</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
