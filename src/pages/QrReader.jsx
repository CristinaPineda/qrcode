import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QrScan from 'react-qr-reader';

export default function QrReader() {
  const [scan, setScan] = useState();

  return(
    <div className="div-scanner">
      <Navbar />
      <section>
        <div className="title-qr-scanner">
          <h1>QR Scanner</h1>
        </div>
        <div className="div-p-scanner">
          <p>Aponte a camera para ler o QRCode</p>
        </div>
        <div className="div-scanner">
          
        </div>
        <div className="div-bts-scanner">
          <input type="text" className="input-link-scanner" />
          <button className="btn-ir">ir</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
