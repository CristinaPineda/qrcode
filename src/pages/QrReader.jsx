import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QrScan from "react-qr-reader";
import { SectionScan, InputResult } from "../styles/Reader";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function QrReader() {
  const [scan, setScan] = useState("*Sem leitura de qr code");

  const handleScan = (img) => {
    if (img) {
      setScan(img);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <Navbar />
      <SectionScan>
        <div className="div-p-scanner">
          <p>Aponte a camera para ler o QRCode</p>
        </div>
        <center>
          <div>
            <QrScan
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: 300 }}
            />
          </div>
        </center>
      </SectionScan>
      <InputResult>
        <input type="text" value={scan} />
        <a href={scan} target="blank">
          <BsArrowRightSquareFill className="icons" />
        </a>
      </InputResult>
      <Footer />
    </div>
  );
}
