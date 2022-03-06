import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QRCode from 'qrcode.react';
import noImage from '../images/noImage.png';
import Download from '../components/Download';
import { SectionGen } from '../styles/Generator';

export default function QrGenerator() {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <SectionGen>
        <div className='div-input'>
          <label htmlFor='input-text'>
            Digite ou cole o endereço para gerar a imagem de qr code
          </label>
          <input onChange={handleChange} type='text' id='input-text' />
        </div>
        <div>
          {text ? (
            <QRCode
              className='codegenerator'
              value={text}
              size={320}
              includeMargin={true}
            />
          ) : (
            <div>
              <p> Sem imagem de QRCode </p>
              <img alt='imagem de uma letra x' src={noImage} width='250' />
            </div>
          )}
        </div>
        <div>{text ? <Download /> : ''}</div>
      </SectionGen>
      <Footer />
    </div>
  );
}
