import React from "react";
import { useLocation } from "react-router-dom";

export default function TitleNavBar() {
  const { pathname } = useLocation();

  const title = () => {
    if (pathname.includes("/qrgenerator")) {
      return <h2>QRCode Generator</h2>;
    }
    if (pathname.includes("/qrreader")) {
      return <h2>QRCode Reader</h2>;
    } else {
      return <h2>Home</h2>;
    }
  };

  return title();
}
