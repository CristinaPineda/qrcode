import React from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

export default function Buttons() {
  const setHistory = useHistory();
  const { pathname } = useLocation();

  const handleClick = () => {
    setHistory.push("/");
  };

  const handleReader = () => {
    setHistory.push("/qrreader");
  };

  const handleGenerator = () => {
    setHistory.push("/qrgenerator");
  };

  const btns = () => {
    if (pathname.includes("/qrgenerator")) {
      return (
        <>
          <button onClick={handleClick}>Home</button>
          <button onClick={handleReader}>Leitor Qr</button>
        </>
      );
    }
    if (pathname.includes("/qrreader")) {
      return (
        <>
          <button onClick={handleClick}>Home</button>
          <button onClick={handleGenerator}>Gerador Qr</button>
        </>
      );
    } else {
      return null;
    }
  };

  return btns();
}
