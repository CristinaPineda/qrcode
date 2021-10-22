import React from "react";
import { Link } from "react-router-dom";
import qrgenerator from "../images/qrgenerator.png";
import qrreader from "../images/qrreader.png";

export default function SectionHome() {
  return (
    <section className="section-home">
      <div>
        <Link to="/qrgenerator">
          <img
            alt="imagem de um qrcode"
            src={qrgenerator}
            width="200"
            height="200"
          />
        </Link>
        <Link to="/qrreader">
          <img
            alt="imagem de um leitor de qrcode"
            src={qrreader}
            width="200"
            height="200"
          />
        </Link>
      </div>
    </section>
  );
}
