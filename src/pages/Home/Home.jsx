import React from 'react'
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Just from '../../containers/just/just';
import Populars from '../../containers/populars/populars';
import Watch from '../../containers/watch/watch';

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Watch/>
      <Populars/>
      <Just/>
    </div>
  )
}
