import React from 'react'
import Footer from '../../containers/footer/footer';
import Genres from '../../containers/genres/genres';
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Just from '../../containers/just/just';
import Likes from '../../containers/likes/likes';
import Lists from '../../containers/lists/lists';
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
      <Lists/>
      <Likes/>
      <Genres/>
      <Footer/>
    </div>
  )
}
