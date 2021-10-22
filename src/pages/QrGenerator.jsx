import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QRCode from 'qrcode.react';
import noImage from '../images/noImage.png';

export default function QrGenerator() {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return(
    <div className="div-generator">
      <Navbar />
      <section>
        <div className="title-qrgenerator">
          <h1>QR Generator</h1>
        </div>
        <div className="div-input">
          <label for="input-text">Digite o endereço para gerar a imagem de qrcode</label>
          <input onChange={ handleChange } type="text" id="input-text"/>
        </div>
        <div className="div-codegenerator">
          { text ?
            <QRCode
              className="codegenerator"
              value={text}
              size={320}
              includeMargin={true}
            /> :
            <div>
              <p> Sem imagem para QRCode </p>
              <img alt="imagem de uma letra x" src={ noImage } width="250"/>
            </div>

          }
        </div>
      </section>
      <Footer />
    </div>
  )
}
