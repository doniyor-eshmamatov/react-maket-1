import React from 'react';
import './populars.css';

export default function Populars() {
  return (
    <div className='populars'>
      <div className="container-populars">
        <div className="populars-inner">
          <div className="just__gradient"></div>
          <h3 className="watch-title">Popular of the week</h3>
          <ul className='populars-list'>
            <li className="populars-item populars-item-1">
              <div className="populars-item-number">1</div>
              <div className="populars-item-img populars-item-img-1"></div>
              <div className="populars-item-content">
                <p className='populars-item-text-1'>PG-13</p>
                <p className='populars-item-text-2'>The Last Of Us</p>
                <p className='populars-item-text-3'>Horror • Thriller</p>
                <p className='populars-item-text-4'><strong>4.3</strong>| Movie</p>
              </div>
            </li>
            <li className="populars-item">
              <div className="populars-item-number populars-item-number-2">2</div>
              <div className="populars-item-img populars-item-img-2"></div>
              <div className="populars-item-content">
                <p className='populars-item-text-1'>PG-13</p>
                <p className='populars-item-text-2'>GOTG 3</p>
                <p className='populars-item-text-3'>|Superhero • Action</p>
                <p className='populars-item-text-4'><strong>4.9</strong>| Movie</p>
              </div>
            </li>
            <li className="populars-item">
              <div className="populars-item-number populars-item-number-2">3</div>
              <div className="populars-item-img populars-item-img-3"></div>
              <div className="populars-item-content">
                <p className='populars-item-text-1'>PG-13</p>
                <p className='populars-item-text-2'>The Flash</p>
                <p className='populars-item-text-3'>Comedy • Action</p>
                <p className='populars-item-text-4'><strong>3.7</strong>| Movie</p>
              </div>
            </li>
            <li className="populars-item">
              <div className="populars-item-number">4</div>
              <div className="populars-item-img populars-item-img-4"></div>
              <div className="populars-item-content">
                <p className='populars-item-text-1'>PG-13</p>
                <p className='populars-item-text-2'>The Man from </p>
                <p className='populars-item-text-3'>Comedy • Action</p>
                <p className='populars-item-text-4'><strong>4.4</strong>| Movie</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
