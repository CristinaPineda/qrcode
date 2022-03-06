import React from 'react';
import Buttons from './Buttons';
import TitleNavBar from './TitleNavBar';
import { Nav } from '../styles/Navbar';

export default function NavbarComp() {
  return (
    <div>
      <Nav>
        <div>
          <TitleNavBar />
        </div>
        <div className='btn-nav'>
          <Buttons />
        </div>
      </Nav>
    </div>
  );
}
