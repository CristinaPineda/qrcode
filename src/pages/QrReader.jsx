import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QrScan from 'react-qr-reader';

export default function QrReader() {
  const [scan, setScan] = useState('No result');

  const handleScan = (img) => {
    if(img) {
      setScan(img);
    }
  }

  const handleError = (err) => {
    console.error(err);
  }

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
        <center>
          <div className="div-scanner">
            <QrScan
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: 300 }}
              />
          </div>
        </center>
      </section>
      <div className="div-btn-scanner">
        <input type="text" className="input-link-scanner" value={ scan } />
        <a href={scan} target="blank">ir</a>
      </div>
      <Footer />
    </div>
  )
}
