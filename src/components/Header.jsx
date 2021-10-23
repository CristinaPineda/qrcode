import React from "react";
import { Headers } from '../styles/Headers';

export default function Header() {
  return (
    <Headers className="header">
      <h1 className="h1-header">CrisCode</h1>
      <div className="div-header">
        <p>Gerador de qr code e scanner</p>
      </div>
    </Headers>
  );
}
