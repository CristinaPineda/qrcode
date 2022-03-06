import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BiHomeAlt, BiCamera } from 'react-icons/bi';
import { MdQrCodeScanner } from 'react-icons/md';

export default function Buttons() {
  const { pathname } = useLocation();

  const btns = () => {
    if (pathname.includes('/qrgenerator')) {
      return (
        <>
          <Link className='links' to='/'>
            <BiHomeAlt className='icons' />
          </Link>
          <Link className='links' to='/qrreader'>
            <BiCamera className='icons' />
          </Link>
        </>
      );
    }
    if (pathname.includes('/qrreader')) {
      return (
        <>
          <Link className='links' to='/'>
            <BiHomeAlt className='icons' />
          </Link>
          <Link className='links' to='/qrgenerator'>
            <MdQrCodeScanner className='icons' />
          </Link>
        </>
      );
    } else {
      return null;
    }
  };

  return btns();
}
