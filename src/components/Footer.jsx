import React from 'react';
import { BsGithub, BsLinkedin, BsBraces, BsCheck2 } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { FooterApp } from '../styles/FooterApp';

export default function Footer() {
  return(
    <FooterApp >
      <div className="footer-top">
        <div>
          <h2>Cristina Pineda Developer</h2>
        </div>
        <div className="social-icons">
          <a href="https://github.com/CristinaPineda" target="blank">
            <BsGithub className="icons"/>
          </a>
          <a href="https://www.linkedin.com/in/cristina-pineda/" target="blank">
            <BsLinkedin className="icons" />
          </a>
          <a href="https://cristinapineda.github.io/#/" target="blank">
            <BsBraces className="icons"/>
          </a>
        </div>
      </div>
      <div className="footer-details">
        <div className="stacks">
          <h4>Projeto QR Code desenvolvido com:</h4>
          <div>
            <p><FaReact className="icons" /></p>
            <p>React</p>
          </div>
        </div>
        <div class="contact">
          <h4>Contato: (11)947201686</h4>
          <h4>cristinadaspineda@yahoo.com.br</h4>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <p>Cristina Pineda &copy; 2021</p>
        </div>
          <div>
            <p>Trabalhe comigo<BsCheck2 className="icons"/></p>
          </div>
      </div>
    </FooterApp>
  )
}
