import React from 'react';

import './likes.css';

import listImg1 from '../../assets/images/likes-img-1.png';
import listImg2 from '../../assets/images/likes-img-2.png';
import listImg3 from '../../assets/images/likes-img-3.png';
import listImg4 from '../../assets/images/likes-img-4.png';
import listImg5 from '../../assets/images/likes-img-5.png';

export default function Likes() {
  return (
    <div className='lists likes'>
      <div className="container-just">
        <div className="lists-inner">
          <div className="just__gradient"></div>
          <h2 className="lists-title">Your Likes</h2>
          <ul className="lists-list">
            <li className="lists-item">
              <img src={listImg1} alt=" " />
              <h3 className="lists-item-title">Thor; love and thunder</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg2} alt=" " />
              <h3 className="lists-item-title">The Green Knight</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg3} alt=" " />
              <h3 className="lists-item-title">Mechanic The Resurrections</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg4} alt=" " />
              <h3 className="lists-item-title">The Pirates; The l;ast Treasure</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
            <li className="lists-item">
              <img src={listImg5} alt=" " />
              <h3 className="lists-item-title">Spider-man 3</h3>
              <p className='populars-item-text-4'><strong>4.6</strong>| Action • Movie</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
