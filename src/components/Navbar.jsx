import React from "react";
import Buttons from './Buttons';

export default function Navbar() {
  return(
    <div className="div-navbar">
      <navbar className="navbar">
        <h1>CrisCode</h1>
        <div className="btn-navbar">
          <Buttons />
        </div>
      </navbar>
    </div>
  )
}
