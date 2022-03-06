import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdQrCodeScanner } from 'react-icons/md';
import { H2nav } from '../styles/TitleNavBar';

export default function TitleNavBar() {
  const { pathname } = useLocation();

  const title = () => {
    if (pathname.includes('/qrgenerator')) {
      return <H2nav>QRCode Generator</H2nav>;
    }
    if (pathname.includes('/qrreader')) {
      return <H2nav>QRCode Scanner</H2nav>;
    } else {
      return (
        <H2nav>
          <MdQrCodeScanner className='icons' />
        </H2nav>
      );
    }
  };
  return title();
}
