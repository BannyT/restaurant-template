import React from 'react';
import Hero from '../components/sections/Hero';
import Menu from '../components/sections/Menu';
import Gallery from '../components/sections/Gallery';
import Reservation from '../components/sections/Reservation';
import Contact from '../components/sections/Contact';

export default function Home(){
  return (
    <>
      <Hero />
      <Menu />
      <Gallery />
      <Reservation />
      <Contact />
    </>
  );
}
