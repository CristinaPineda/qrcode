import React from "react";
import { Buttondown } from '../styles/Generator';
import { BiDownload } from 'react-icons/bi';

export default function Download() {
  const handleDownload = () => {
    const imageDownload = document.querySelector(".codegenerator");
    const png = imageDownload
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let link = document.createElement("a");
    link.href = png;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Buttondown className="btn-download" onClick={handleDownload}>
      <BiDownload className="icons"/>
    </Buttondown>
  );
}
