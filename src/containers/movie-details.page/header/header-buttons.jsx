import React from 'react';
import './header-buttons.css'
import Item1 from '../../../assets/images/search-icon.png';
import Item2 from '../../../assets/images/ring-icon.png';
import Item3 from '../../../assets/images/avatar.png';
import Item4 from '../../../assets/images/arrow-down.svg';

export default function headerButtons() {
  return (
    <ul className='md-site-header-right'>
      <li className='md-h-right-item'>
        <img src={Item1} alt=" " />
      </li>
      <li className='md-h-right-item'>
        <img src={Item2} alt=" " />
      </li>
      <li className='md-h-right-item'>
        <img src={Item3} alt=" " />
      </li>
      <li className='md-h-right-item'>
        <img src={Item4} alt=" " />
      </li>
    </ul>
  )
}
