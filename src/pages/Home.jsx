import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SectionHome from '../components/SectionHome';

export default function Home() {
  return (
    <div className='div-home'>
      <Navbar />
      <Header />
      <SectionHome />
      <Footer />
    </div>
  );
}
