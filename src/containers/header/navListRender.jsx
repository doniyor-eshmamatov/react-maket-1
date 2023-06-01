import React from 'react'

export default function NavListRender({array}) {
  return (
    <ul className='nav-list'>
        {
            array.map(el => <li className='nav-item' key={el.id}>{el.name}</li>)
        }
      </ul>
    )
}
