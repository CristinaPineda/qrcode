import React from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { GrHomeRounded, GrCamera } from 'react-icons/gr';
import { MdQrCodeScanner } from 'react-icons/md';

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
          <button onClick={handleClick}><GrHomeRounded /></button>
          <button onClick={handleReader}><GrCamera /></button>
        </>
      );
    }
    if (pathname.includes("/qrreader")) {
      return (
        <>
          <button onClick={handleClick}><GrHomeRounded /></button>
          <button onClick={handleGenerator}><MdQrCodeScanner /></button>
        </>
      );
    } else {
      return null;
    }
  };

  return btns();
}
