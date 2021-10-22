import React from "react";
import Buttons from "./Buttons";
import TitleNavBar from "./TitleNavBar";

export default function Navbar() {
  return (
    <div className="div-navbar">
      <navbar className="navbar">
        <div className="title-navbar">
          <TitleNavBar />
        </div>
        <div className="btn-navbar">
          <Buttons />
        </div>
      </navbar>
    </div>
  );
}
