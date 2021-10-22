import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import QRCode from 'qrcode.react';

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

      </section>
      <Footer />
    </div>
  )
}
