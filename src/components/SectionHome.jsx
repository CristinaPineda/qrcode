import React from 'react';
import { Link } from 'react-router-dom';
import qrgenerator from '../images/qrgenerator.png';
import qrreader from '../images/qrreader.png';
import { Section } from '../styles/Home';

export default function SectionHome() {
  return (
    <Section>
      <div>
        <Link to='/qrgenerator'>
          <p>Gerador</p>
          <img
            alt='imagem de um qrcode'
            src={qrgenerator}
            width='200'
            height='200'
          />
        </Link>
      </div>
      <div>
        <Link to='/qrreader'>
          <p>Scanner</p>
          <img
            alt='imagem de um leitor de qrcode'
            src={qrreader}
            width='200'
            height='200'
          />
        </Link>
      </div>
    </Section>
  );
}
