import React from "react";
import Buttons from "./Buttons";
import TitleNavBar from "./TitleNavBar";

export default function NavbarComp() {
  return (
    <div className="div-navbar">
      <nav className="navbar">
        <div className="title-nav">
          <TitleNavBar />
        </div>
        <div className="btn-nav">
          <Buttons />
        </div>
      </nav>
    </div>
  );
}
