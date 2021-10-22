import React from "react";

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
    <button className="btn-download" onClick={handleDownload}>
      download
    </button>
  );
}
